import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Wordle+",
      description: "A Full Stack Wordle game built using the MERN Stack. Supports words of different lengths and themes.",
      imageUrl: "https://source.unsplash.com/random/?wordle",
      link: "https://github.com/MILKS3NPAI/WordleProject",
    },
    {
      title: "Florida Man Tracker",
      description: "A MERN Full Stack Web Scraping application that scrapes for data from the internet about Florida Men and their activities, stores it in a database, and displays stored news entries",
      imageUrl: "https://source.unsplash.com/random/?florida,man",
      link: "https://github.com/JJeCho/web-scraper-floridaman",
    },
    {
      title: "Day of Calendar",
      description: "A React application that utilizes various 3rd Party API's to collect and display information about holidays, historical events, and more about any given day.",
      imageUrl: "https://source.unsplash.com/random/?calendar",
      link: "",
    },
    {
      title: "50 Projects in 50 Days",
      description: "A collection of 50 projects in HTML, CSS, and JS that I completed to sharpen my web development skills. Completed following along with Brad Traversey's 50 Projects in 50 Days.",
      imageUrl: "https://source.unsplash.com/random/?html,css,js",
      link: "https://github.com/JJeCho/50Projects",
    },
  ];

  return (
    <div className="container">
      <h1 className="container-title">Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
                <br />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </p>
            </div>
            <div className="project-image">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img
                  src={project.imageUrl}
                  alt="Random Image"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
