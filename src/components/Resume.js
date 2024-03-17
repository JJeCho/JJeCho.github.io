import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Education</h2>
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
      <h2>Experience</h2>
      <RenderExperience
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
  <p>
    <strong>{school}</strong> - {date}<br />
    {degree}<br />
    {location}
  </p>
);

const RenderExperience = ({ company, date, location, tasks }) => (
  <div>
    <h3>{company}</h3>
    <p><strong>{company}</strong> - {date}<br />{location}</p>
    <ul>
      {tasks.map((task, index) => <li key={index}>{task}</li>)}
    </ul>
  </div>
);


export default Resume;
