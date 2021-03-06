const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* let myUser = 'was not set' */

/* app.get('/myUser', (req, res) => {
  res.send({
    message: 'Your user name is: ' + myUser
  })
}) */

require('./routes')(app)
// Force clear by: {force: true} in sync
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('Running server on port ' + config.port)
  })
