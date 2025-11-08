import os
import hashlib
import json
from datetime import datetime

def hash_file(path):
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()

def collect_blocks(root=".", extensions=(".html", ".css", ".js", ".json", ".roff")):
    blocks = []
    for dirpath, _, filenames in os.walk(root):
        for filename in filenames:
            if filename.endswith(extensions):
                full_path = os.path.join(dirpath, filename)
                rel_path = os.path.relpath(full_path, root)
                blocks.append({
                    "path": rel_path.replace("\\", "/"),
                    "hash": hash_file(full_path),
                    "timestamp": datetime.utcnow().isoformat() + "Z",
                    "type": os.path.splitext(filename)[1][1:]
                })
    return blocks

if __name__ == "__main__":
    data = {"blocks": collect_blocks()}
    with open("shared-data/block-box.json", "w") as f:
        json.dump(data, f, indent=2)
