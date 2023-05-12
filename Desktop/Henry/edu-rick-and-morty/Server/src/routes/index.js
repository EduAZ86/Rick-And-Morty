const { Router } = require("express")
const router = Router();

const { login } = require('../controllers/login')
const { getCharacterById } = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

router.get("/character/:id", getCharacterById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router