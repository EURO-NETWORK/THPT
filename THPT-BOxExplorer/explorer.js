import { getLinksByTag } from "../shared-scripts/link-map.js";

document.addEventListener("DOMContentLoaded", () => {
  const tagSelector = document.getElementById("tagSelector");
  const tagLinks = document.getElementById("tagLinks");
  const loadBlocks = document.getElementById("loadBlocks");
  const blockOutput = document.getElementById("blockOutput");

  tagSelector.addEventListener("change", () => {
    const tag = tagSelector.value;
    tagLinks.innerHTML = "";
    if (tag) {
      const links = getLinksByTag(tag);
      links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        tagLinks.appendChild(a);
      });
    }
  });

  loadBlocks.addEventListener("click", () => {
    fetch("../shared-data/block-box.json")
      .then(res => res.json())
      .then(data => {
        blockOutput.textContent = JSON.stringify(data.blocks, null, 2);
      })
      .catch(err => {
        blockOutput.textContent = "Fehler beim Laden der Blöcke: " + err;
      });
  });
});
