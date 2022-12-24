import React from "react";
import styles from './Social.module.css';
import PropTypes from 'prop-types';

const Social = ({link, img, name}) => {
    return (
        <div className={styles.social}>
            <a href={link} className={styles.link} target="_blank" rel="noreferrer"><img src={img} alt={name} /></a>
        </div>
    );
}

export default Social;

Social.propTypes = {
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}