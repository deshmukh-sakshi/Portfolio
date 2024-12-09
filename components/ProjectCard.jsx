import { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';
import LinkIcon from './icons/LinkIcon';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.links}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                <LinkIcon />
              </a>
            )}
          </div>
        </div>
        
        <p className={styles.shortDescription}>{project.shortDescription}</p>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
