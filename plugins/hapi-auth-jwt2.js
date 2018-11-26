const config = require('../config')

const validate = async (decoded, request, h) => {
  if (!decoded.userId) {
    return { isValid: false }
  } else {
    return { isValid: true }
  }
}

module.exports = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    key: config.jwtSecret,
    validate: validate
  })
  server.auth.default('jwt')
}
