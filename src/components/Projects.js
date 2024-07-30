import "./Projects.css";
import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "Ju7FV9wCHPgQU9WUgeSe68_OCWm0ujc2Qh5e6xRH3AM"
});

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Orbital Position Prediction Program",
      description: "A program to predict and visualize satellite orbital positions.",
      imageUrl: "",
      link: "",
      languages: ["C++"],
      imageQuery: "satellite",
      category: ["Graphics", "Simulation", "Physics"]
    },
    {
      title: "Flight Simulators",
      description: "Flight simulators developed using OpenGL and Three.js to provide realistic flight experiences.",
      imageUrl: "",
      link: "",
      languages: ["C++", "JavaScript", "Three.js"],
      imageQuery: "flight simulation",
      category: ["Graphics", "Simulation", "Physics", "Web Application"]
    },
    {
      title: "Command-line AES Encryption/Decryption Tool",
      description: "A tool for AES encryption and decryption from the command line.",
      imageUrl: "",
      link: "",
      languages: ["C++"],
      imageQuery: "encryption",
      category: ["Security", "Tools"]
    },
    {
      title: "Image Processing Program",
      description: "A program for advanced image processing techniques (Edge detection, etc.).",
      imageUrl: "",
      link: "",
      languages: ["Python"],
      imageQuery: "edge detection",
      category: ["Graphics", "Tools"]
    },
    {
      title: "TCP/IP Network Traffic Analyzer",
      description: "A tool to analyze and monitor TCP/IP network traffic.",
      imageUrl: "",
      link: "",
      languages: ["C++"],
      imageQuery: "network",
      category: ["Security", "Network", "Tools"]
    },
    {
      title: "Runescape Grand Exchange Tracker",
      description: "A web app for monitoring and tracking the Runescape Grand Exchange market.",
      imageUrl: "",
      link: "",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "currency exchange",
      category: ["Web Application", "Full Stack", "Tools", "Game"]
    },
    {
      title: "r/place Clone",
      description: "A clone of the popular r/place collaborative canvas extended to allow text.",
      imageUrl: "",
      link: "",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "r/place",
      category: ["Web Application", "Full Stack", "Game"]
    },
    {
      title: "2D Fighting Game",
      description: "A 2D fighting game developed in Phaser3 with various characters and moves inspired by Super Smash Brothers Melee.",
      imageUrl: "",
      link: "",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "fighting game",
      category: ["Game", "Web Application", "Full Stack"]
    },
    {
      title: "IO Game",
      description: "A multiplayer IO game with real-time interactions.",
      imageUrl: "",
      link: "",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "io game",
      category: ["Game", "Web Application", "Full Stack"]
    },
    {
      title: "AI Text Adventure RPG",
      description: "A text-based adventure RPG with AI-driven storylines.",
      imageUrl: "",
      link: "",
      languages: ["Python"],
      imageQuery: "text adventure game",
      category: ["Game", "Front End", "AI"]
    },
    {
      title: "Wordle+",
      description: "A Full Stack Wordle game built using the MERN Stack. Supports words of different lengths and themes.",
      imageUrl: "",
      link: "https://github.com/MILKS3NPAI/WordleProject",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "wordle",
      category: ["Game", "Full Stack", "Web Application"]
    },
    {
      title: "Florida Man Tracker",
      description: "A MERN Full Stack Web Scraping application that scrapes for data from the internet about Florida Men and their activities, stores it in a database, and displays stored news entries.",
      imageUrl: "",
      link: "https://github.com/JJeCho/web-scraper-floridaman",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "floridaman",
      category: ["Web Application", "Full Stack", "Web Scraping"]
    },
    {
      title: "Day of Calendar",
      description: "A React application that utilizes various 3rd Party API's to collect and display information about holidays, historical events, and more about any given day.",
      imageUrl: "",
      link: "",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "calendar",
      category: ["Web Application", "Full Stack", "Web Scraping"]
    },
    {
      title: "50 Projects in 50 Days",
      description: "A collection of 50 projects in HTML, CSS, and JS that I completed to sharpen my web development skills. Completed following along with Brad Traversey's 50 Projects in 50 Days.",
      imageUrl: "",
      link: "https://github.com/JJeCho/50Projects",
      languages: ["JavaScript", "HTML", "CSS"],
      imageQuery: "html",
      category: ["Etc", "Front End"]
    }
  ]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);



  useEffect(() => {
    const fetchImages = async () => {
      const updatedProjects = await Promise.all(projects.map(async (project) => {
        try {
          const result = await api.search.getPhotos({ query: project.imageQuery, orientation: "landscape" });
          const imageUrl = result.response.results[0]?.urls.regular || "https://source.unsplash.com/random";
          return { ...project, imageUrl };
        } catch (error) {
          console.log("something went wrong!", error);
          return { ...project, imageUrl: "https://source.unsplash.com/random" };
        }
      }));
      setProjects(updatedProjects);
      setFilteredProjects(updatedProjects);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.category.some(category => selectedCategories.includes(category))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategories, projects]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  const uniqueCategories = [...new Set(projects.flatMap(project => project.category))];

  return (
    <div>
     <div className="filter-container">
        <button onClick={toggleFilterVisibility} className="filter-toggle">
          {filterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
        {filterVisible && (
          <div className="filter-options">
            <h3>Filter by Category</h3>
            {uniqueCategories.map((category, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
                <br />
                <span>Languages: {project.languages.join(", ")}</span>
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
                  alt={project.title}
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
