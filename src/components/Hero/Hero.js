import React from 'react';
import profile from "./mine2-pic.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Tenzin Chime.
            </h1>
            <p className={styles.description}>
                I'm a Frontend developer with the knowledge of technologies like Javascript,ReactJs and NodeJs.
            </p>
            <a href="mailto:tenchime27@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
            <img src={profile} alt='profile pic' className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
  )
}
