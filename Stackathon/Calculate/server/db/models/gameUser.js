const Sequelize = require('sequelize')
const db = require('../db')

const GameUser = db.define('gameUser', {
    gameId: {
        type: Sequelize.INTEGER
    },
    userId: {
        type: Sequelize.INTEGER
    }
})

module.exports = GameUser