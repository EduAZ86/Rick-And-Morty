import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Form from "../Form/Form";
import styles from "./Nav.module.css"


const Nav = (props) =>{ 
   
  const { onSearch, setAccess } = props;

  const handleLogOut = () => {
    setAccess(false);
  }; 

  return (
    <header className={styles.header}>   
      <div className={styles.icon}></div>      
      <SearchBar className={styles.search} randomID={props.randomID} onSearch={props.onSearch}/>       
     
      <nav className={styles.nav}>
        <ul className={styles.unorderList}>           
            <li className={styles.home}><Link  to='./home' className={styles.home} >Home</Link> </li>     
            <li className={styles.about}><Link to='./about' className={styles.about} >About</Link></li>
            <li className={styles.about}><Link to='./favorites' className={styles.about} >Favorites</Link></li>
            <li >   <div className={styles.logout} onClick={handleLogOut} > </div>     </li>
        </ul>
      </nav>
      
     

    </header>
  )  
}

export default Nav;


