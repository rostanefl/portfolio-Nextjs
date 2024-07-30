import React from 'react';
import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    title: "Portfolio Website for CEO",
    description: "A sleek and professional portfolio website designed for a CEO, featuring an elegant design and robust functionality to showcase achievements and professional milestones."
  },
  {
    title: "Restaurant Website",
    description: "A vibrant and user-friendly website for a restaurant, including features such as online reservations, menu displays, and customer reviews."
  },
  {
    title: "Construction Business Website",
    description: "A comprehensive website for a construction business, highlighting services, project galleries, and client testimonials."
  }
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
