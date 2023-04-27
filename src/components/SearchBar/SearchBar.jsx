import { useState } from "react";
import styles from "./SearchBar.module.css"
 

const SearchBar = (props) => {

   const [id,setId] = useState("")   
    
   const handleChange = (event) => {
       setId(event.target.value)
   }



 
   return (
      <div className={styles.serchContent}>
         <input className={styles.imput} onChange={handleChange} value={id}  type ='number' placeholder=" ID..."/>         
         <button className={styles.button} onClick={()=>{props.onSearch(id)}}>+</button>
         <button className={styles.random} onClick={()=>{props.randomID()}}>?</button>
      </div>
   );
}
export default SearchBar;