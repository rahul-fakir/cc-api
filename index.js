const express = require('express')
const app = express()
const config = require('./config/development.js')

app.get('/', function (req, res) {
  res.status(200).send({
    status: 'ONLINE'
  })
})

app.listen(config.APP_PORT, () => {
  console.log(`ccAPI listening on port ${config.APP_PORT}`)
})
