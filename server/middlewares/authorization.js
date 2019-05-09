const User = require('../models/user')

module.exports = {
  authorization(req, res, next) {
    const userId = req.authenticated.id
    User.findById(userId)
    .then(foundUser => {
      if(foundUser.id == userId && foundUser.role == 'employee') {
        next()
      }
    })
    .catch(err => {
      console.log(err)
      res.status(401).json(err)
    })
  }
}