import React from "react";
import styles from './About.module.css';
import {ABOUT_TEXT} from "../../utils/constant";

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2>О себе</h2>
                <div className={styles.text}>
                    {ABOUT_TEXT.map((item, key) => <p key={key}>{item}</p>)}
                </div>
            </div>
        </section>
    );
}

export default About;