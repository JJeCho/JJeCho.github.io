// About.js

import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import "./About.css";


const api = createApi({
  accessKey: "Ju7FV9wCHPgQU9WUgeSe68_OCWm0ujc2Qh5e6xRH3AM"
});
const About = () => {
  const [images, setImages] = useState({
    coding: '',
    nature: '',
    hiking: '',
    conversation: ''
  });

  useEffect(() => {
    const fetchImages = async () => {
      const queries = ['coding', 'nature', 'hiking', 'conversation'];
      const fetchedImages = await Promise.all(queries.map(async (query) => {
        try {
          const result = await api.search.getPhotos({ query, orientation: 'landscape' });
          return result.response.results[0]?.urls.regular || '';
        } catch (error) {
          console.log("Error fetching image:", error);
          return '';
        }
      }));

      setImages({
        coding: fetchedImages[0],
        nature: fetchedImages[1],
        hiking: fetchedImages[2],
        conversation: fetchedImages[3]
      });
    };

    fetchImages();
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-section">
        <img src={images.coding} alt="Coding" className="about-image" />
        <p className="paragraph">
          Web development for me is a blend of art and science. It's not just about crafting lines of code, but about designing intuitive and engaging digital experiences. Each project is an opportunity to innovate and refine my skills, creating solutions that are both functional and elegant.
        </p>
      </div>
      <div className="about-section">
        <img src={images.nature} alt="Nature" className="about-image" />
        <p className="paragraph">
          Beyond the digital world, I find peace and inspiration in nature. Whether it's fishing by a serene lake or hiking through forested trails, the great outdoors offers a refreshing escape from the screen.
        </p>
      </div>
      <div className="about-section">
        <img src={images.hiking} alt="Hiking" className="about-image" />
        <p className="paragraph">
          When I'm not immersed in software development, you might find me exploring new fishing spots, enjoying a quiet hike, or listening to the waves at the beach. These moments in nature not only rejuvenate me but also fuel my creativity and passion for my work.
        </p>
      </div>
      <div className="about-section">
        <img src={images.conversation} alt="Conversation" className="about-image" />
        <p className="paragraph">
          If you ever want to talk about technology or anything else, I'm always open to a conversation or a fishing trip. Let's connect and see where our interests take us. 
        </p>
      </div>
    </div>
  );
};

export default About;