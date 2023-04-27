import Card from "../Card/Card"; 
import styles from "./Cards.module.css"

function Cards({ characters, onClose }) {
   return (
   <div className={styles.container}>      
      {characters.map(({ id, name, status, species, gender, origin, image }) => {
         return (
          <div className ={styles.cardContainer}>
           <Card 
            key={characters.id}
            id = {id}
            name = {name}
            species = {species} 
            gender = {gender}
            image = {image}
            status={status}
            origin={origin}
            onClose={onClose}         
         /> 
         </div>  

         )
      })}
     
   </div>
   
   
   );
}
export default Cards


