const ERRORS = require("../config/errors")
const { todos } = require("../models")
const { isEmpty } = require("../utils/validator")

class TaskService {
  static tasks = async (id) => {
    try {
      const taskList = await todos.findAll({
        where: { id_user: id },
        attributes: ['id', 'id_user', 'task', 'complete']
      })

      return taskList

    } catch (err) {
      throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
    }
  }

  static addTask = async ({ id, task }) => {
    try {
      if (isEmpty(task)) {
        throw new Error(ERRORS.INPUT_CANNOT_BE_EMPTY)
      }
      const create = await todos.create({
        id_user: id,
        task
      })
      return create;
    } catch (err) {
      throw err
    }
  }

  static deleteTask = async (id) => {
    try {
      const destroy = await todos.destroy({
        where: { id }
      })
      return destroy
    } catch (err) {
      throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = TaskService