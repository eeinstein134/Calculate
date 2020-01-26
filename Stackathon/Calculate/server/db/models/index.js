const User = require('./user')
const Game = require('./game')

User.hasMany(Game)
Game.hasMany(User)

Game.belongsToMany(User, {
  through: 'gameUser',
  as: 'users',
  foreignKey: 'gameId'
})
User.belongsToMany(Game, {
  through: 'gameUser',
  as: 'games',
  foreignKey: 'userId'
})

module.exports = {
  User,
  Game
}
