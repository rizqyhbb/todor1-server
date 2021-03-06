const TaskService = require('../services/task-service')
const { getError } = require("./base-controller");


class TaskController {
  static getAllTask = async (req, res) => {
    try {
      const { id } = req.user
      const getAllTask = await TaskService.tasks(id)
      res.status(200).json(getAllTask)
    } catch (err) {
      const error = getError(err);
      console.log(error)
      res.status(error.code).json(error.message)
    }
  }

  static addTask = async (req, res) => {
    try {
      const { id } = req.user
      const { task } = req.body
      const addTask = await TaskService.addTask({ id, task })
      return res.status(200).json(addTask)

    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json(error.message)
    }
  }

  static deleteTask = async (req, res) => {
    try {
      const { id } = req.params
      await TaskService.deleteTask(id)
      return res.status(200).json({ message: 'Task Deleted' })
    } catch (err) {
      const error = getError(err);
      console.log(error);
      return res.status(error.code).json(error.message)
    }
  }

  static updateStatus = async (req, res) => {
    try {
      const { id } = req.params
      const { complete } = req.body
      const updateStatus = await TaskService.updateStatus({ id, complete })
      return res.status(200).json(updateStatus)
    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json(error.message)

    }
  }
}

module.exports = TaskController;