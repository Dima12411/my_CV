import React from 'react';
import style from './Footer.module.css'
import styles from '../../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styles.container} ${style.footerContainer}`}>
                <h3>Чижонок Дмитрий</h3>
                <div className={style.contactsWithMe}>
                    <span className={style.spanContacts}>ВК</span>
                    <span className={style.spanContacts}>Тг</span>
                    <span className={style.spanContacts}>Гит</span>
                    <span className={style.spanContacts}>Почта</span>
                </div>
                <span>©2022 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;