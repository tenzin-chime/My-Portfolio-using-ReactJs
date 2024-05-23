import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import Projects from "./components/Projects/Projects.js";
import Contacts from "./components/Contacts/Contacts.js";

function App() {
  return (
   <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contacts />
   </div>
  );
}

export default App;
