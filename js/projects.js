const projectsSection = document.getElementById("projects-section");

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
 
  const projectImage = document.createElement("a");
  projectImage.href = `#projet${project.id}`;
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = `Logo du projet ${project.id}`
  
  projectImage.appendChild(img);
  projectCard.appendChild(projectImage);
  
  const technologiesParagraph = document.createElement("p");
  technologiesParagraph.textContent = project.technologies.join(", ");
  projectCard.appendChild(technologiesParagraph);

  return projectCard;}

function createDetailedProjectCard(project) {
  const detailedProjectCard = document.createElement("article");
  detailedProjectCard.classList.add("detailed-project-card");
  detailedProjectCard.id = `projet${project.id}`;

const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  detailedProjectCard.appendChild(projectTitle);

  const imageContainer= document.createElement("div");
  imageContainer.classList.add("image-container");
  
  const projectImage = document.createElement("img");
  projectImage.src = project.image2;
  projectImage.alt = `Image de présentation du projet ${project.id}`
  imageContainer.appendChild(projectImage);
  detailedProjectCard.appendChild(imageContainer);
  
  if (project.demo || project.github) {
    const linksContainer = document.createElement("div");
    linksContainer.classList.add("project-links");

    if (project.demo) {
      const demoLink = document.createElement("a");
      demoLink.href = project.demo;
      demoLink.textContent = "Voir la démo";
      linksContainer.appendChild(demoLink);
    }

    if (project.github) {
      const githubLink = document.createElement("a");
      githubLink.href = project.github;
      githubLink.textContent = "Lien GitHub";
      linksContainer.appendChild(githubLink);
    }

    detailedProjectCard.appendChild(linksContainer);
  }

const technologiesContainer = document.createElement("div");
technologiesContainer.classList.add("tech-container")
const technologiesTitle = document.createElement("h3");
technologiesTitle.textContent = "Technologies utilisées";
technologiesContainer.appendChild(technologiesTitle);

const technologiesList = document.createElement("ul");
project.technologies.forEach((tech) => {
  const techItem = document.createElement("li");
  techItem.textContent = tech;
  technologiesList.appendChild(techItem);
});

technologiesContainer.appendChild(technologiesList);
detailedProjectCard.appendChild(technologiesContainer);
  
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");
  
  const descriptionTitle = document.createElement("h3");
  descriptionTitle.textContent = "Description";
  descriptionContainer.appendChild(descriptionTitle);
  
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  descriptionContainer.appendChild(projectDescription);
  
  detailedProjectCard.appendChild(descriptionContainer);
  
  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("skills-container");

const skillsTitle = document.createElement("h3");
skillsTitle.textContent = "Compétences acquises";
skillsContainer.appendChild(skillsTitle);

const skillsList = document.createElement("ul");
project.competences.forEach((skill) => {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

skillsContainer.appendChild(skillsList);
detailedProjectCard.appendChild(skillsContainer);

  return detailedProjectCard;
}

fetch("../Data/projects/projects.json")
  .then((response) => response.json())
  .then((data) => {    
    const projectsTitle = document.createElement("h1");
    projectsTitle.textContent = "Mes Projets OpenClassrooms";
    projectsSection.appendChild(projectsTitle);
    
    const projectListSection = document.createElement("section");
    projectListSection.id = "project-list";
    data.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectListSection.appendChild(projectCard);
    });
    
    const detailedProjectsSection = document.createElement("section");
    detailedProjectsSection.id= "project-details";
    data.forEach((project) => {
      const detailedProjectCard = createDetailedProjectCard(project);
      detailedProjectsSection.appendChild(detailedProjectCard);
    });
    
    projectsSection.appendChild(projectListSection);
    projectsSection.appendChild(detailedProjectsSection);
  })
  .catch((error) => {
    console.error("Une erreur s'est produite lors de la récupération des données des projets.", error);
  });