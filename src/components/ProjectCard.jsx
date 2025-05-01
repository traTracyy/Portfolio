import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      {project.details && (
        <div className={styles.viewDetailsWrapper}>
          <Link href={`/projects/${project.id}`} className={styles.viewDetails}>
            View Details
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;