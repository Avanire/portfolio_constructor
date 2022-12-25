import React from "react";
import styles from './Header.module.css';
import {AVATAR, CONTACTS_HEADER, NAME, ROLE, SOCIAL_LINK_GIT, SOCIAL_LINK_MAIL, SURNAME} from '../../utils/constant';
import Social from "../Social/Social";
import gitImage from '../../images/github.svg';
import mailImage from '../../images/envelope-regular.svg';
import Contacts from "../Contacts/Contacts";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contact}>
                <div className={styles.bio}>
                    <div className={styles.avatar}><img src={AVATAR} alt={NAME}/></div>
                    <div className={styles.contactPersonal}>
                        <div className={styles.name}>{NAME}</div>
                        <div className={styles.surname}>{SURNAME}</div>
                        <div className={styles.role}>{ROLE}</div>
                        <div className={styles.social}>
                            <Social link={SOCIAL_LINK_GIT} img={gitImage} name='git'/>
                            <Social link={SOCIAL_LINK_MAIL} img={mailImage} name='mail'/>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    {CONTACTS_HEADER.map((item) => <Contacts key={item.id} heading={item.heading} value={item.value}
                                                             link={item.link}/>)}
                </div>
            </div>
        </header>
    );
}

export default Header;