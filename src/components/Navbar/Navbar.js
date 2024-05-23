import React,{useState} from 'react';
import styles from "./Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import { getImageUrl } from '../../utils';

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}> 
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
          <IconButton 
          onClick={()=>{
            return setMenuOpen(!menuOpen);
          }}>
          {menuOpen ? <CloseIcon sx={{ color: "white"}} className={styles.iconButton}/> : <MenuIcon sx={{ color: "white"}} className={styles.iconButton}/>}
          </IconButton>

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>{setMenuOpen(false)}}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contacts'>Contacts</a></li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar