import React from 'react';
import style from './Footer.module.css'
import styles from '../../common/styles/Container.module.css'
import SocialIcon from "./media/SocialIcon";

type SocialIconArrayType = {
    media: string
}

const Footer = () => {
    const socialIconArray: Array<SocialIconArrayType> = [
        {media: 'Vk'},
        {media: 'Tg'},
        {media: 'Git'},
        {media: 'Mail'},
    ]
    return (
        <div className={style.footerBlock}>
            <div className={`${styles.container} ${style.footerContainer}`}>
                <h3>Чижонок Дмитрий</h3>
                <div className={style.contactsWithMe}>
                    {socialIconArray.map(m => {
                        return <SocialIcon
                            name={m.media}
                        />
                    })}
                </div>
                <span>©2022 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;