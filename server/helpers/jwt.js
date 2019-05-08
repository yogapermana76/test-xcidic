const jwt = require('jsonwebtoken')

module.exports = {
  sign(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY);
  },
  verify(token) {
    jwt.verify(token, process.env.SECRET_KEY);
  }
}