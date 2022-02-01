const jwt = require('jsonwebtoken')
const ERRORS = require("../config/errors")
const { getError } = require('../controllers/base-controller')

const authentication = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization
    if (!authHeaders) {
      throw new Error(ERRORS.UNAUTHORIZED)
    }
    const token = authHeaders && authHeaders.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        throw new Error(ERRORS.FORBIDDEN)
      }
      req.user = user
      next()
    })
  } catch (err) {
    const error = getError(err)
    console.log(error)
    return res.status(error.code).json(error.message)
  }
}

module.exports = authentication;