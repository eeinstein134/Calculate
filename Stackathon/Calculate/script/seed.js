'use strict'

const db = require('../server/db')
const {User, Game} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({firstName: 'Cody', lastName: 'Pug', email: 'cody@email.com', password: '123'}),
    User.create({firstName: 'Lizzo', lastName: 'Ein', email: 'lizzo@email.com', password: '123'}),
    User.create({firstName: 'Jimbo', lastName: 'Pea', email: 'jimbo@email.com', password: '123'})
  ])

  const games = await Promise.all([
    Game.create({userId: 1, title: 'Addition', score: 100, won: true, timePlayed: 30, datePlayed: '01-25-2020'}),
    Game.create({userId: 2, title: 'Addition', score: 100, won: true, timePlayed: 45, datePlayed: '01-25-2020'}),
    Game.create({userId: 2, title: 'Subtraction', score: 50, won: false, timePlayed: 60, datePlayed: '01-25-2020'}),
    Game.create({userId: 3, title: 'Subtraction', score: 75, won: true, timePlayed: 50, datePlayed: '01-25-2020'}),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${games.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
