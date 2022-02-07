import React from 'react';
import style from './Contacts.module.css'
import styles from '../../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styles.container} ${style.contactsContainer}`}>
                <h2>Контакты</h2>
                <form className={style.form}>
                    <input className={style.input} placeholder="Ваше имя" type="text"/>
                    <input className={style.input} placeholder="Ваш email" type="text"/>
                    <textarea className={style.textarea} placeholder="Ваше сообщение"/>
                </form>
                <button className={style.button}>Отправить</button>
            </div>

        </div>
    );
};

export default Contacts;