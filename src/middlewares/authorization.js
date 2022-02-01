const ERRORS = require("../config/errors")
const { getError } = require("../controllers/base-controller")
const { todos } = require("../models")

const authorization = async (req, res, next) => {

  try {
    const user = req.user.id
    const params = req.params.id
    const findTask = await todos.findOne({
      where: { id: params }
    })
    if (findTask === null) {
      throw new Error(ERRORS.NOT_FOUND)
    }

    if (findTask.id_user !== user) {
      throw new Error(ERRORS.UNAUTHORIZED)
    }
    next()

  } catch (err) {
    const error = getError(err)
    console.log(error)
    return res.status(error.code).json(error.message)
  }
}

module.exports = authorization