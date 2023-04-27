
import { connect } from "react-redux";
import styles from "./Card.module.css"
import { Link, NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect , useState } from "react";



function Card(props) {

   const { id, name, status, species, image, onClose,addFav, removeFav , myFavorites } = props

   const [ isFav , setIsFav ] = useState(false)

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)      
      } else {
         setIsFav(true)
         addFav(props)
      }
   }
   

   return (
   <div className={styles.card}>
       <div className={styles.landing}>   
         <div className={styles.buttonAndName}>

            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }            
 

            <button className={styles.button} onClick={()=> {onClose(id)}}>X</button>
            <h2 className={styles.name}>{name}</h2>        
         </div>
         <div className={styles.profile}><img className={styles.image} src={image} alt='imagen' /></div>          
      </div>

      <div className={styles.info}>
         <ul className={styles.ulList}>
            <li className={styles.list}>Species: {species}</li>
            <li className={styles.list}>ID: {id}</li>
            <li className={styles.list}>Status: {status}</li>
            <li className={styles.mas}>mas acerca de<NavLink className={styles.navLink} to={`/detail/${id}`}><h5 className="card-name">{name}</h5></NavLink> </li>
         </ul>
      </div>         
   </div>
   );}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)