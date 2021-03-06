const Task = require('../models/task')

class TaskController {

  static addTask(req, res) {
    Task.create({
      title: req.body.title,
      description: req.body.description,
      date: new Date(),
      userId: req.body.userId
    })
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static getAllTask(req, res) {
    Task.find({})
    .populate('userId')
    .then(allTask => {
      res.status(200).json(allTask)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static findAllTask(req, res) {
    Task.find({
      userId: req.params.userId
    })
    .populate('userId')
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static findOneTask(req, res) {
    Task.findById(req.params.id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updateTask(req, res) {
    Task.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      date: new Date()
    })
    .then(() => {
      res.status(200).json({ message: 'task success updated' })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteTask(req, res) {
    Task.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'task success deleted' })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = TaskController