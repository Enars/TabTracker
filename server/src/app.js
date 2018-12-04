const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

let myUser = 'was not set'

app.post('/register', (req, res) => {
  res.send({
    message: 'Dear ' + req.body.email + ', your user was registered'
  })
})

app.get('/myUser', (req, res) => {
  res.send({
    message: 'Your user name is: ' + myUser
  })
})

app.listen(process.env.PORT || 8081)
