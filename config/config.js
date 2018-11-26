const env2 = require('env2')

if (process.env.NODE_ENV === 'production') {
  env2('./.env.prod')
} else {
  env2('./.env')
}

const {
  env
} = process

module.exports = {
  development: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT
  }
}
