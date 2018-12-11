const { User } = require('../models')

module.exports = {
  // Only caring about the callback
  // Controllers are for defining endpoints
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Email is already registered'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      console.log('testing')
      console.log('user', user.email)
      if (!user) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const passwordIsValid = password === user.password
      if (!passwordIsValid) {
        res.status(403).send({
          error: 'Incorrect password'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred'
      })
    }
  }
}
