import "./Projects.css";
import Data from "../Data";

const printProjects = () => {
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projects-container");

  const projectsTitle = document.createElement("h2");
  projectsTitle.textContent = "Proyectos";
  projectsContainer.appendChild(projectsTitle);

  Data.projects.forEach((project) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute('id', 'projects');

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    const titleElement = document.createElement("p");
    titleElement.classList.add("heading");
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("para");
    descriptionElement.textContent = project.description;

    const linkElement = document.createElement("a");
    linkElement.classList.add("btn");
    linkElement.textContent = "Ver proyecto";
    linkElement.href = project.preview;
    linkElement.setAttribute("target", "_blank");

    const githubElement = document.createElement("a");
    githubElement.classList.add("btn");
    githubElement.textContent = "GitHub";
    githubElement.href = project.link;
    githubElement.setAttribute("target", "_blank");

    project.tecnologies.forEach((technologyImageUrl) => {
      const technologyImageElement = document.createElement("img");
      technologyImageElement.src = technologyImageUrl;
      technologyImageElement.classList.add("technologies");
      contentElement.appendChild(technologyImageElement);
    });

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);
    contentElement.appendChild(linkElement);
    contentElement.appendChild(githubElement);
    cardElement.appendChild(contentElement);
    projectsContainer.appendChild(cardElement);
  });

  return projectsContainer;
};

export default printProjects;
