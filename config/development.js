const envvar = require('envvar');

let configValues = {
  APP_PORT: envvar.number('APP_PORT', 8080),
}



module.exports = configValues
