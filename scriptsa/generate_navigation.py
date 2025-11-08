import os, json

def generate_navigation(root="THPT"):
    projects = []
    for project in ["THPTx", "EBSI-THPT-Project"]:
        subsites = []
        for i in range(1, 10):
            path = f"{project}/subsite-{i}/index.html"
            if os.path.exists(path):
                subsites.append({
                    "name": f"Subsite {i}",
                    "path": path
                })
        projects.append({
            "name": project,
            "index": f"{project}/index.html",
            "subsites": subsites
        })

    with open("shared-data/navigation.json", "w") as f:
        json.dump({"projects": projects}, f, indent=2)

if __name__ == "__main__":
    generate_navigation()
