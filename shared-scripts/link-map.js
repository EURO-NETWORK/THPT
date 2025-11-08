const linkMap = [
  {
    name: "THPT Hauptseite",
    url: "/index.html",
    tags: ["THPT", "AAI", "Zukunft"]
  },
  {
    name: "THPTx Projekt",
    url: "/THPTx/index.html",
    tags: ["THPTx", "Majorana", "AAI"]
  },
  {
    name: "EBSI-THPT Projekt",
    url: "/EBSI-THPT-Project/index.html",
    tags: ["EBSI", "Rehabilitation", "AAI"]
  }
];

export function getLinksByTag(tag) {
  return linkMap.filter((link) => link.tags.includes(tag));
}
