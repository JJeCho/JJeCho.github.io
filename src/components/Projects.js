import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="container-title">Projects</h1>
      <div className="projects">
        <div className="project">
          <div className="project-info">
            <h3 className="project-title">Wordle+</h3>
            <p className="project-description">
              A Full Stack Wordle game built using the MERN Stack. Supports
              words of different lengths and themes.
              <br />
              <a
                href=""
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
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                src="https://source.unsplash.com/random/?wordle"
                alt="Random Image"
              />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <h3 className="project-title">Day of Calendar</h3>
            <p className="project-description">
              A React application that utilizes various 3rd Party API's to collect and display information about holidays, historical events, and more about any given day.
              <br />
              <a
                href=""
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
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                src="https://source.unsplash.com/random/?calendar"
                alt="Random Image"
              />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <h3 className="project-title">50 Projects in 50 Days</h3>
            <p className="project-description">
              A collection of 50 projects in HTML, CSS, and JS that I completed to sharpen my web development skills.
              Completed following along with Brad Traversey's 50 Projects in 50 Days.
              <br />
              <a
                href=""
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
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                src="https://source.unsplash.com/random/?html,css,js"
                alt="Random Image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
