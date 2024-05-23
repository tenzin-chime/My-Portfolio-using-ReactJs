import React from 'react';
import styles from "./Experience.module.css";
import history from "../../data/history.json";

import html from "../../assets/skills/HTML.png";
import css from "../../assets/skills/CSS.png";
import nodeJs from "../../assets/skills/nodeJs.png";
import reactJs from "../../assets/skills/reactJs.png";
import mongoDb from "../../assets/skills/mongoDb.png";
import JS from "../../assets/skills/js.png";

function Experience() {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills and Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                <div className={styles.skill}>
                <div className={styles.skillImage}><img src={html} alt='html' /></div>
                    <p>HTML</p>
                </div>
                <div className={styles.skill}>
                <div className={styles.skillImage}><img src={css} alt='css' /></div>
                    <p>CSS</p>
                </div>
                <div className={styles.skill}>
                <div className={styles.skillImage}><img src={JS} alt='javascript' /></div>
                    <p>JS</p>
                </div>
                <div className={styles.skill}>
                <div className={styles.skillImage}><img src={reactJs} alt='reactJs' /></div>
                    <p>ReactJs</p>
                </div>
                <div className={styles.skill}>
                <div className={styles.skillImage}><img src={nodeJs} alt='nodeJs' /></div>
                    <p>NodeJs</p>
                </div>
                <div className={styles.skill}>
                <div className={styles.skillImage}><img src={mongoDb} alt='mongoDb' /></div>
                    <p>MongoDB</p>
                </div>
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem,id)=>{
                        return <li key={id}>
                        <div>
                            
                        </div>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                        {historyItem.experiences.map((experience,id)=>{
                                            return <li key={id}>{experience}</li>
                                        })}
                                    
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Experience