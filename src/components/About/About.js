import React from 'react';
import cursorIcon from "./cursorIcon.png";
import serverIcon from "./serverIcon.png";
import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend developer</h3>
                        <p>
                            I'm a Frontend developer with experience in building reponsive and optimized sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt='Server Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend developer</h3>
                        <p>
                            I have developed fast and optimised API.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Python developer</h3>
                        <p>
                            I have experience in developing automated python packages. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About