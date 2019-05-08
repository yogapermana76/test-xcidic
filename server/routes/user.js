const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/register/manager', userController.regManager)
router.post('/register/employee', userController.regEmployee)
router.post('/login', userController.login)
router.get('/', userController.findAllUser)

module.exports = router