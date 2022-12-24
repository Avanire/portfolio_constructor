import React from "react";
import styles from './Footer.module.css';
import {CONTACTS_FOOTER} from "../../utils/constant";
import PropTypes from "prop-types";

const Contact = ({icon, text, link}) => {
    return (
        <a href={link} target="_blank" className={styles.link} rel="noreferrer" >
            <div className={styles.linkBlock}>
                <img src={icon} alt="" className={styles.contactImg}/>
                <span className={styles.contactText}>{text}</span>
            </div>
        </a>
    );
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>Давайте работать вместе</div>
            <div className={styles.contactWrapper}>
                {CONTACTS_FOOTER.map(item => <Contact key={item.id} icon={item.icon} text={item.name} link={item.link} />)}
            </div>
        </footer>
    );
}

export default Footer;

Contact.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}