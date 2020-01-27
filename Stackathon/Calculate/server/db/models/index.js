const User = require('./user')
const Game = require('./game')

Game.hasMany(User)

User.belongsToMany(Game, {
  through: 'gameUser',
  as: 'games',
  foreignKey: 'userId'
})

module.exports = {
  User,
  Game
}
