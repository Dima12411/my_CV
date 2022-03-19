import React from 'react';
import styles from '../Footer.module.css'

type MediaPropsType = {
    name: string
}

const SocialIcon = (props: MediaPropsType) => {
    return (
        <span className={styles.spanContacts}>{props.name}</span>
    );
};

export default SocialIcon;