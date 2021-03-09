'use strict'
const { User } = require('../models')

const auth = (async (req, res, next) => {
    try {
        const user = req.headers.username
        const data = await User.findOne({
            where: {
                name: user
            }
        })
        if (data === null) {
            console.log('err')
        } else {
            req.userData = data
            next()
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = auth