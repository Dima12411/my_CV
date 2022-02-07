import React from 'react';
import style from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
    descriptionText: string
}

const Work = ({title, description, descriptionText, ...props}: WorkPropsType) => {
    return (
        <div className={style.work}>

            <div className={style.buttonContainer}>
                <button className={style.button}>Смотреть</button>
            </div>
                <h3>{title}</h3>
                <h4>{description}:</h4>
                <span className={style.descriptionText}>{descriptionText}</span>
        </div>
    );
};

export default Work;