import os, json

def generate_navigation():
    projects = []

    # THPT Root
    projects.append({
        "name": "THPT",
        "index": "index.html"
    })

    # THPTx Projekt
    subsites_thptx = []
    for i in range(1, 4):
        path = f"THPTx/subsite-{i}/index.html"
        if os.path.exists(path):
            subsites_thptx.append({
                "name": f"Subsite {i}",
                "path": path
            })
    projects.append({
        "name": "THPTx",
        "index": "THPTx/index.html",
        "subsites": subsites_thptx
    })

    # EBSI Projekt
    subsites_ebsi = []
    for i in range(1, 3):
        path = f"EBSI-THPT-Project/subsite-{i}/index.html"
        if os.path.exists(path):
            subsites_ebsi.append({
                "name": f"Subsite {i}",
                "path": path
            })
    projects.append({
        "name": "EBSI-THPT-Project",
        "index": "EBSI-THPT-Project/index.html",
        "subsites": subsites_ebsi
    })

    # THPT-BOxExplorer
    projects.append({
        "name": "THPT-BOxExplorer",
        "index": "THPT-BOxExplorer/index.html"
    })

    with open("shared-data/navigation.json", "w") as f:
        json.dump({"projects": projects}, f, indent=2)

if __name__ == "__main__":
    generate_navigation()
