import React from 'react';
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { motion } from 'framer-motion';


function Projects() {
  return <section id='projects' className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
        {
            projects.map((project,id)=>{
                return (
                    <motion.div 
                    whileHover={{scale : 1.07}} 
                    whileTap={{scale : 0.9}}
                    key={id} className={styles.projectContainer}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <ul className={styles.skills}>
                    {project.skills.map((skill,id)=>{
                        return <li key={id} className={styles.skill}>{skill}</li>;
                    })}
                </ul>
                <div className={styles.links}>
                <a href={project.demo} className={styles.link}>Demo</a>
                <a href={project.source} className={styles.link}>Source</a>
                </div>
                </motion.div>
                )
            })
        }
    </div>
  </section>
}

export default Projects;