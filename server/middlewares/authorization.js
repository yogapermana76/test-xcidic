const User = require('../models/user')

module.exports = {
  authorization(req, res, next) {
    const userId = req.authenticated.id
    console.log(userId)
    User.findById(userId)
    .then(foundUser => {
      if(foundUser.role === 'employee') {
        next()
      }
    })
    .catch(err => {
      res.status(401).json(err)
    })
  }
}