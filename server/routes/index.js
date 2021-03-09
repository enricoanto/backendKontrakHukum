const express = require('express').Router
const router = express()
const Controller = require('../controllers')
const auth = require('../middlewares/auth')

router.post('/register', Controller.register)
// router.use(auth)
router.get('/movie', Controller.fetchMovies)
router.get('/movie/:movieId', Controller.movieById)
router.patch('/movie/:movieId/book', Controller.bookTickets)
module.exports = router