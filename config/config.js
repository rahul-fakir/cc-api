const envvar = require('envvar');

module.exports = {
  APP_PORT: envvar.number('APP_PORT', 8080),
  APP_SECRET: envvar.string('APP_SECRET', 'cc-secret'),
  database: envvar.string('database', 'cc'),
  username: envvar.string('username', 'username'),
  password: envvar.string('password', 'veBai4ao4quu'),
};
