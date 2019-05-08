const router = require('express').Router()
const TaskController = require('../controllers/taskController')

router.post('/', TaskController.addTask)
router.get('/:userId', TaskController.findAllTask)
// router.get('/:id', TaskController.findOneTask)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router