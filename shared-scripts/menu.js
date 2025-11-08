document.addEventListener("DOMContentLoaded", () => {
  fetch("shared-data/navigation.json")
    .then((response) => response.json())
    .then((data) => {
      const menuContainer = document.createElement("nav");
      const ul = document.createElement("ul");

      data.projects.forEach((project) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = project.index;
        a.textContent = project.name;
        li.appendChild(a);
        ul.appendChild(li);
      });

      menuContainer.appendChild(ul);
      document.body.prepend(menuContainer);
    })
    .catch((error) => {
      console.error("Navigation konnte nicht geladen werden:", error);
    });
});
