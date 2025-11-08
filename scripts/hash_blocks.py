import os
import hashlib
import json
from datetime import datetime

def sha256(data):
    return hashlib.sha256(data.encode("utf-8")).hexdigest()

def hash_file(path):
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()

def derive_tag(genesis_hash, project_name):
    return sha256(genesis_hash + project_name)

def detect_project(path):
    parts = path.split("/")
    if path == "index.html":
        return "THPT"
    elif parts[0] in ["THPTx", "EBSI-THPT-Project", "THPT-BOxExplorer"]:
        return parts[0]
    elif parts[0].startswith("subsite-"):
        return "THPT"
    else:
        return None

def collect_blocks(root="."):
    genesis_path = os.path.join(root, "index.html")
    if not os.path.exists(genesis_path):
        raise FileNotFoundError("Genesis block (index.html) fehlt!")

    genesis_hash = hash_file(genesis_path)
    blocks = []
    tag_cache = {}

    for dirpath, _, filenames in os.walk(root):
        for filename in filenames:
            if filename.endswith((".html", ".css", ".js", ".json", ".py", ".c", ".roff", ".yml")):
                full_path = os.path.join(dirpath, filename)
                rel_path = os.path.relpath(full_path, root).replace("\\", "/")
                block_hash = hash_file(full_path)
                timestamp = datetime.utcnow().isoformat() + "Z"

                project = detect_project(rel_path)
                if project:
                    if project not in tag_cache:
                        tag_cache[project] = derive_tag(genesis_hash, project)
                    blocks.append({
                        "path": rel_path,
                        "hash": block_hash,
                        "timestamp": timestamp,
                        "type": os.path.splitext(filename)[1][1:],
                        "tag": tag_cache[project]
                    })

    return blocks

if __name__ == "__main__":
    data = { "blocks": collect_blocks() }
    with open("shared-data/block-box.json", "w") as f:
        json.dump(data, f, indent=2)
