const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.use('*', (req, res, next) => {
  try {
    let userId = Number(req.params['0'].slice(1))

    if (req.session.user.id === userId) {
      next()
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findOne({
      where: {
        id: id
      }
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})
