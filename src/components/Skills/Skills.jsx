import React, {useEffect, useRef, useState} from "react";
import styles from './Skills.module.css';
import {SKILLS} from "../../utils/constant";
import Skill from "../Skill/Skill";

const Skills = () => {
    const [onView, setOnView] = useState(false);
    const skillRef = useRef(null);

    const handleScroll = () => {
        const position = skillRef.current.getBoundingClientRect().y;
        if (position <= 200) {
            setOnView(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className={styles.skills} ref={skillRef}>
            <div className={styles.container}>
                <h2 className={styles.header}>Навыки</h2>
                {SKILLS.map(item => <Skill key={item.id} name={item.name} icon={item.icon} content={item.content} progress={item.progress} onView={onView} />)}
            </div>
        </section>
    );
}

export default Skills;