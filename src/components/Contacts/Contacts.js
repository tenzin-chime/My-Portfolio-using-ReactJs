import React from 'react';
import styles from "./Contact.module.css";
import mail from "./mail.png";
import linkedin from "./linkedin.png";
import github from "./github.png";

function Contacts() {
  return (
    <footer id='contacts' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <img src={mail} alt='email icon'/>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tenchime27@gmail.com" target="_blank">tenchime27@gmail.com</a>
            </li>
            <li className={styles.link}>
            <img src={linkedin} alt='LinkedIn icon'/>
            <a href='https://www.linkedin.com/in/tenzin-chime-b7852a201'>linkedin.com/tenzin-chime</a>
            </li>
            <li className={styles.link}>
            <img src={github} alt='github icon'/>
            <a href='https://github.com/tenzin-chime'>github.com/tenzin-chime</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contacts