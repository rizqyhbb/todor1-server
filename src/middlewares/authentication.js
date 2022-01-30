const jwt = require('jsonwebtoken')
const ERRORS = require("../config/errors")

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
    throw err
  }
}

module.exports = authentication;