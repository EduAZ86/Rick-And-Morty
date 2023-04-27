import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Form from "../Form/Form";
import styles from "./Nav.module.css"


const Nav = (props) =>{    
  return (
    <header className={styles.header}>   
      <div className={styles.icon}></div>      
      <SearchBar className={styles.search} randomID={props.randomID} onSearch={props.onSearch}/>       
     
      <nav className={styles.nav}>
        <ul className={styles.unorderList}>           
            <li className={styles.home}><Link  to='./home' className={styles.home} >home</Link> </li>     
            <li className={styles.about}><Link to='./about' className={styles.about} >About</Link></li>
        </ul>
      </nav>
      <div className={styles.logout} > </div>
      <a href=""></a>

    </header>
  )  
}

export default Nav;


