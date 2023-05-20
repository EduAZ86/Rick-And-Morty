const express = require("express")
const router = express.Router()

const login  = require('../controllers/login')
const { getCharacterById } = require('../controllers/getCharById')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')

router.get("/character/:id", getCharacterById)
router.get("/login", login)
router.post("/login", postUser)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router