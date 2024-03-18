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
      <h1 className='experience-title'>Experience</h1>
      <RenderExperience
      title="Ecommerce and Business Administration Specialist"
        company="Traveland"
        date="March 2022 – Present"
        location="Cerritos, California"
        tasks={[
          'Managed and maintained the company\'s website, ensuring a seamless online shopping experience',
          'Oversaw e-commerce operations, including order processing, inventory management, and shipping logistics',
          'Executed business administration tasks, contributing to the overall efficiency of the company'
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
