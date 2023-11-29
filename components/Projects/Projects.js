import "./Projects.css"
import Data from '../Data';

const printProjects = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');

  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Proyectos';
  projectsContainer.appendChild(projectsTitle);

  Data.projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectsContainer.setAttribute('id', 'projects');

    const titleElement = document.createElement('h3');
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    const linkElement = document.createElement('a');
    linkElement.textContent = 'GitHub';
    linkElement.href = project.link;
    linkElement.setAttribute('target', '_blank');

    const linkPreview = document.createElement('a');
    linkPreview.textContent = 'Ver proyecto';
    linkPreview.href = project.preview;
    linkPreview.setAttribute('target', '_blank');

    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);
    projectElement.appendChild(linkElement);
    projectElement.appendChild(linkPreview);
    projectsContainer.appendChild(projectElement);
  });

  return projectsContainer;
};

export default printProjects;
