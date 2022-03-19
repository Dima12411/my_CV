import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {v1} from "uuid";


type SkillsType = {
    id: string
    title: string
    icon: string
    description: string
}

const Skills = () => {
    const skillsArray: Array<SkillsType> = [
        {id: v1(), title: "React", icon: 'Image',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio officiis rem ullam vero voluptates!\n" +
                "Doloremque esse fuga fugiat inventore numquam officiis reprehenderit saepe, suscipit voluptatibus."},
        {id: v1(), title: "JavaScript", icon: 'Image',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio officiis rem ullam vero voluptates!\n" +
                "Doloremque esse fuga fugiat inventore numquam officiis reprehenderit saepe, suscipit voluptatibus."},
        {id: v1(), title: "Redax", icon: 'Image',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio officiis rem ullam vero voluptates!\n" +
                "Doloremque esse fuga fugiat inventore numquam officiis reprehenderit saepe, suscipit voluptatibus."},
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skillsArray.map(s => {
                        return <Skill key={s.id}
                                      title={s.title}
                                      icon={s.icon}
                                      description={s.description}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;