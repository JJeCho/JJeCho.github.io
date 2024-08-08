import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className ='resume'>
      <h1 className='education-title'>Education</h1>
      <RenderDegree
        school="California State University, Long Beach"
        date="Dec 2023"
        degree="Bachelor of Science in Computer Science"
        location="Long Beach, California"
      />
      {/**
      <RenderDegree
        school="Cerritos College"
        date="June 2020"
        degree="Associate in Science for Transfer in Computer Science"
        location="Norwalk, California"
      />
      <RenderDegree
        school="Gretchen Whitney High School"
        date="June 2014"
        degree="High School Diploma"
        location="Cerritos, California"
      />
       */}
      <h1 className='experience-title'>Experience</h1>
      <RenderExperience
      title="Ecommerce and Business Administration Specialist (Freelance)"
        company="Traveland"
        date="March 2022 – Present"
        location="Cerritos, California"
        tasks={[
          'Worked closely with management to translate business requirements into effective technical implementations.',
          'Created a suite of sales data analysis tools using Python (Pandas, NumPy, Seaborn, Matplotlib) to manage and visualize diverse data sources such as inventory, sales data, and Google Analytics reports',
          'Developed a full-stack web application using Flask and React, optimizing e-commerce operations including order management and integration with ShipEngine API',
        ]}
      />
      <RenderExperience
      title="Coding Instructor"
        company="Coding Minds"
        date="May 2024 – Present"
        location="Cerritos, California"
        tasks={[
          'Designed and delivered curriculum in web development and advanced algorithms, engaging K-12 students and preparing them for competitive programming contests',
          'Instructed intensive summer camp programs focused on Python programming, Web Development, Machine Learning, Generative AI, and AP Computer Science exam and USACO preparation courses',
        ]}
      />
      <RenderExperience
      title="Division Advisor"
        company="Uniqlo"
        date="March 2015 - March 2022"
        location="Cerritos, California"
        tasks={[
          'Led a team of 30+ to surpass performance goals through effective communication, coaching, and cultivating a collaborative work environment',
          'Conducted comprehensive training sessions on various standards and processes, contributing to the professional development of team members and facilitating effective onboarding for new hires',
          'Oversaw inventory management processes, ensuring optimal product representation and availability',
          'Proactively managed customer needs, surpassing expectations based on service standards and principles'
        ]}
      />
    </div>
  );
};

const RenderDegree = ({ school, date, degree, location }) => (
  <div className='education'>
    <p className='education-description'>
    <strong>{school}</strong> - {date}<br />
    {degree}<br />
    {location}
    </p>
  </div>
);

const RenderExperience = ({ title, company, date, location, tasks }) => (
  <div className='experience'>
    <h3 className='title'>{title}</h3>
    <p className='employment-period'><strong>{company}</strong> - {date}<br />{location}</p>
    <ul className='job-tasks'>
      {tasks.map((task, index) => <li key={index}>{task}</li>)}
    </ul>
  </div>
);


export default Resume;
