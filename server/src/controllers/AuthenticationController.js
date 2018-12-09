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
  }
}
