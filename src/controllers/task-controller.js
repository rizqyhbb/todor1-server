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
      res.status(error.code).json(error)
    }

  }
}

module.exports = TaskController;