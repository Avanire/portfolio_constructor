import React from "react";
import styles from './Contacts.module.css';
import PropTypes from "prop-types";

const Contacts = ({heading, value, link}) => {
    return (
        <section className={styles.contact}>
            <div className={styles.heading}>{heading}</div>
            {link ? <a href={link} className={styles.link}>{value}</a> : <div>{value}</div>}
        </section>
    );
}

export default Contacts;

Contacts.prototype = {
    heading: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}