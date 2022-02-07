import React from 'react';
import style from './RemoteWork.module.css'
import styles from '../../common/styles/Container.module.css'

const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styles.container} ${style.remoteWorkContainer}`}>
                <span className={style.spanWork}>Рассматриваю варианты удаленной работы</span>
                <button className={style.buttonWork}>Нанять меня</button>
            </div>
        </div>
    );
};

export default RemoteWork;