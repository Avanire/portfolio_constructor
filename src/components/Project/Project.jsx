import React from "react";
import styles from './Project.module.css';
import PropTypes from "prop-types";

const Project = ({name, description, linkRepository, image, linkProject, techStackIcons}) => {
    return (
        <section className={styles.project}>
            <div className={styles.content}>
                <h3>{name}</h3>
                <span className={styles.text}>Инструменты</span>
                <div className={styles.iconsWrapper}>
                    {techStackIcons.map((item, key) => <img key={key} className={styles.icon} src={item} alt=""/>)}
                </div>
                <div className={styles.description}>{description}</div>
                <a href={linkRepository} className={styles.link} target='_blank' rel="noreferrer">Ссылка на репозиторий
                    GitHub >>></a>
            </div>
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image}/>
                <div className={styles.hover}>
                    <a href={linkProject} className={styles.hoverLink} target='_blank' rel="noreferrer">Посмотреть
                        проект</a>
                </div>
            </div>
        </section>
    );
}

export default Project;

Project.prototype = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkRepository: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    linkProject: PropTypes.string.isRequired,
    techStackIcons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}