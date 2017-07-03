const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send({
    status: 'ONLINE'
  })
})

app.listen(3000, '0.0.0.0', () => {
  console.log('ccAPI listening on port ${config.port}')
})
