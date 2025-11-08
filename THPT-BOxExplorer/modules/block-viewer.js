export function renderBlock(block) {
  const container = document.createElement("div");
  container.className = "block";

  const path = document.createElement("p");
  path.innerHTML = `<strong>Dateipfad:</strong> ${block.path}`;

  const hash = document.createElement("p");
  hash.innerHTML = `<strong>SHA256:</strong> ${block.hash}`;

  const type = document.createElement("p");
  type.innerHTML = `<strong>Dateityp:</strong> ${block.type}`;

  const time = document.createElement("p");
  time.innerHTML = `<strong>Timestamp:</strong> ${block.timestamp}`;

  container.appendChild(path);
  container.appendChild(hash);
  container.appendChild(type);
  container.appendChild(time);

  return container;
}
