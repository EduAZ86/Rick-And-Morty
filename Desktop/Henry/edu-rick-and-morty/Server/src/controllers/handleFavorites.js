let myFavorites = []
const postFav = (req, res) =>{
    myFavorites.push(req.body)
    return res.status(200).jason(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter((character) => character.id !== Number(id))    
    return res.status(200).json(myFavorites)
}

module.exports = { postFav, deleteFav}