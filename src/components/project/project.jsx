import React from 'react';
import './project.css';
import { FaPlayCircle } from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    {
      image: 'https://example.com/project1.jpg',
      title: 'New Year CountDown',
    },
    {
      image: 'https://example.com/project2.jpg',
      title: 'Heart Disease Prediction',
    },
    {
      image: 'https://example.com/project3.jpg',
      title: 'Online Payroll Management System',
    },
    {
      image: 'https://example.com/project4.jpg',
      title: 'Shoppy Ecommerce',
    },
    {
      image: 'https://example.com/project5.jpg',
      title: 'Personal Portfolio',
    },
    {
      image: 'https://example.com/project6.jpg',
      title: 'Amazing Meal',
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <FaPlayCircle className="project-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;