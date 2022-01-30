const ERRORS = require("../config/errors")
const { todos } = require("../models")

class TaskService {
  static tasks = async (id) => {
    try {
      const taskList = await todos.findAll({
        where: { id_user: id },
        attributes: ['id', 'task', 'complete']
      })

      return taskList

    } catch (err) {
      console.log(err)
      throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = TaskService