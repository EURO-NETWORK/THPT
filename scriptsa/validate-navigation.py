import json
import os

def validate_links(nav_path="shared-data/navigation.json"):
    with open(nav_path, "r") as f:
        data = json.load(f)

    missing = []

    for project in data.get("projects", []):
        if not os.path.exists(project["index"]):
            missing.append(project["index"])
        for sub in project.get("subsites", []):
            if not os.path.exists(sub["path"]):
                missing.append(sub["path"])

    if missing:
        print("❌ Fehlende Pfade:")
        for path in missing:
            print(" -", path)
    else:
        print("✅ Alle Pfade gültig.")

if __name__ == "__main__":
    validate_links()
