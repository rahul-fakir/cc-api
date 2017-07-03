const envvar = require('envvar');

let configValues = {
  APP_PORT: envvar.number('APP_PORT'),
  APP_SECRET: envvar.string('APP_SECRET'),
  MONGO_URL: envvar.string('MONGO_URL')
  
}



module.exports = configValues
