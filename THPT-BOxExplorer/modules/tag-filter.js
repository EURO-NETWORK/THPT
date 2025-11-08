import { getLinksByTag } from "../../shared-scripts/link-map.js";

export function renderTagLinks(tag) {
  const container = document.createElement("div");
  container.className = "tag-links";

  const links = getLinksByTag(tag);
  if (links.length === 0) {
    container.textContent = "Keine Links für diesen Tag gefunden.";
    return container;
  }

  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    container.appendChild(a);
  });

  return container;
}
