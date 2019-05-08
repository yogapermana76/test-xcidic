const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.post('/', taskController.addTask)
router.get('/', taskController.findAllTask)
router.get('/:id', taskController.findOneTask)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

module.exports = router