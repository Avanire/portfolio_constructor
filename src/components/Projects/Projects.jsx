import React from "react";
import styles from './Projects.module.css';
import {PROJECT} from "../../utils/constant";
import Project from "../Project/Project";

const Projects = () => {
    return (
        <section className={styles.project}>
            <div className={styles.container}>
                <h2 className={styles.header}>Проекты</h2>
                {PROJECT.map(item => <Project key={item.id} name={item.name} description={item.description} image={item.image} linkProject={item.linkProject} linkRepository={item.linkRepository} techStackIcons={item.techStackIcons} />)}
            </div>
        </section>
    );
}

export default Projects;