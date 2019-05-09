const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const { authenticate } = require('../middlewares/authenticate')
const { authorization } = require('../middlewares/authorization')

router.use(authenticate)

router.post('/', authorization, TaskController.addTask)
router.get('/', TaskController.getAllTask)
router.get('/:userId', TaskController.findAllTask)
router.get('/edit/:id', TaskController.findOneTask)
router.put('/:id', authorization, TaskController.updateTask)
router.delete('/:id', authorization, TaskController.deleteTask)

module.exports = router