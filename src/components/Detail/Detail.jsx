import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import styles from "./Detail.module.css"

const Detail = ()=>{
    const  [character, setCharacter]  = useState({})
    const { id } = useParams()

useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

return (
<>

{character?(

    <div className={styles.container}>               
        <ul className={styles.ulList}>
            <p className={styles.list}>Name: {character.name}</p> 
            <p className={styles.list}>Gender: {character.gender}</p>
            <p className={styles.list}>Status: {character.status}</p> 
            <p className={styles.list}>Origin:  {character?.origin?.name}</p>                     
        </ul>
        <div className={styles.imageContainer}><img className={styles.image} src={character.image} alt="imagen" /></div>
    </div>

)
:( 'loading ...' )
}
</>
)
}

export default Detail

