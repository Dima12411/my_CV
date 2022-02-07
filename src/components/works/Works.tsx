import React from 'react';
import style from './Works.module.css'
import stylesContainer from '../../common/styles/Container.module.css'
import {v1} from "uuid";
import Work from "./work/Work";

type WorksType = {
    id: string
    title: string
    description: string
    descriptionText: string
}

const Works = () => {

    const works: Array<WorksType> = [
        {id: v1(), title: "Project name", description: "Project description",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea error excepturi minima quae temporibus vitae. Dignissimos earum libero sed." },
        {id: v1(), title: "Project name", description: "Project description",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea error excepturi minima quae temporibus vitae. Dignissimos earum libero sed." },
        {id: v1(), title: "Project name", description: "Project description",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea error excepturi minima quae temporibus vitae. Dignissimos earum libero sed." },
    ]

    return (
        <div className={style.worksBlock}>
            <div className={`${stylesContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    {works.map(w => {
                        return (
                            <Work
                            key={w.id}
                            title={w.title}

                            description={w.description}
                            descriptionText={w.descriptionText}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Works;