'use strict'
const { User, Actor, Movie } = require('../models')


class Controller {
    static async register(req, res) {
        try {
            const { name } = req.body
            const data = await User.create({ name })
            res.status(201).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async fetchMovies(req, res) {
        try {
            const data = await Movie.findAll()
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async movieById(req, res) {
        const MovieId = req.params.movieId
        try {
            const data = await Movie.findByPk(MovieId, {
                include: [{
                    model: Actor,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }]
            })
            res.status(201).json(data)
        } catch (err) {
            console.log(err)
        }
    }
    static async bookTickets(req, res) {
        const { tickets } = req.body
        const MovieId = req.params.movieId
        const movie = await Movie.decrement('tickets', {
            by: tickets,
            where: {
                id: MovieId
            }
        })
        const data = await User.increment('tickets', {
            by: tickets,
            where: {
                id: req.userData.id
            }
        })
        res.status(200).json(data[0][0][0])    
    }
}

module.exports = Controller