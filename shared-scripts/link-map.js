const linkMap = [
  {
    name: "THPT Hauptseite",
    url: "/index.html",
    tags: ["THPT", "AAI", "Zukunft", "AxTHPT"]
  },
  {
    name: "THPTx Projekt",
    url: "/THPTx/index.html",
    tags: ["THPTx", "Majorana", "AAI", "ExtTHPTx"]
  },
  {
    name: "EBSI-THPT Projekt",
    url: "/EBSI-THPT-Project/index.html",
    tags: ["EBSI", "Rehabilitation", "AAI", "ExtEBSI"]
  },
  {
    name: "THPT-BOxExplorer",
    url: "/THPT-BOxExplorer/index.html",
    tags: ["Explorer", "AAI", "THPT", "AxExplorer"]
  }
];

export function getLinksByTag(tag) {
  return linkMap.filter((link) => link.tags.includes(tag));
}
