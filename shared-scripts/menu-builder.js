export function buildMenu(data) {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  data.projects.forEach((project) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = project.index;
    a.textContent = project.name;
    li.appendChild(a);

    if (project.subsites) {
      const subUl = document.createElement("ul");
      project.subsites.forEach((subsite) => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = subsite.path;
        subA.textContent = subsite.name;
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}
