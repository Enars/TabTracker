module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: 'Dear ' + req.body.email + ', your user was registered'
    })
  })
}
