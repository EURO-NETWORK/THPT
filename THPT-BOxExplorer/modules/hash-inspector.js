export function findBlockByHash(blocks, queryHash) {
  return blocks.find(block => block.hash === queryHash);
}

export function renderHashResult(block) {
  const container = document.createElement("div");
  container.className = "hash-result";

  if (!block) {
    container.textContent = "Kein Block mit diesem Hash gefunden.";
    return container;
  }

  const info = document.createElement("p");
  info.innerHTML = `
    <strong>Pfad:</strong> ${block.path}<br>
    <strong>Typ:</strong> ${block.type}<br>
    <strong>Timestamp:</strong> ${block.timestamp}
  `;
  container.appendChild(info);

  return container;
}
