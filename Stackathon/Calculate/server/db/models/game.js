const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    won: {
        type: Sequelize.BOOLEAN
    },
    timePlayed: {
        type: Sequelize.TIME
    },
    datePlayed: {
        type: Sequelize.DATE
    }
})

module.exports = Game