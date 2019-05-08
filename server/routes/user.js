const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/register/manager', UserController.regManager)
router.post('/register/employee', UserController.regEmployee)
router.post('/login', UserController.login)
router.get('/', UserController.findAllUser)

module.exports = router