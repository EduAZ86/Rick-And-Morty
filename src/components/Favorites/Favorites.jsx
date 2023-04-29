import { connect } from "react-redux"
import Card from "../Card/Card"
import styles from "./Favorites.module.css"
import { useState } from "react"

const Favorites = (props) => {

    const [ aux, setAux ] = useState(false)


    const{ myFavorites } = props
    return (
        <div className={styles.container} >
                <h1>Mi favorites</h1>
                {myFavorites?.map(character => {
                    return (
                        <div className ={styles.cardContainer}>

                            <Card 
                            key={character.id}
                            id = {character.id}
                            name = {character.name}
                            species = {character.species} 
                            gender = {character.gender}
                            image = {character.image}
                            status={character.status}
                            origin={character.origin}
                            onClose={character.onClose}         
                         />
                        </div>
                    )
                })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);