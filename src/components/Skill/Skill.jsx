import React from "react";
import styles from './Skill.module.css';
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar";

const Skill = ({name, content, icon, progress, onView}) => {
    return (
        <section className={styles.skill}>
            <div className={styles.iconWrapper}><img src={icon} alt={name} /></div>
            <h3>{name}</h3>
            <span className={styles.skillProgress}>Skill`s progress</span>
            <ProgressBar width={progress} onView={onView} />
            <div className={styles.content}>
                {content}
            </div>
        </section>
    );
}

export default Skill;

Skill.prototype = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    progress: PropTypes.number.isRequired,
    onView: PropTypes.bool.isRequired
}