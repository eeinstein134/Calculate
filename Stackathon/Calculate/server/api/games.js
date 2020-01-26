const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const games = await Game.findAll()
        res.json(games)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const game = await Game.findById({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        next(error)
    }
})