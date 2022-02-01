const jwt = require('jsonwebtoken')
const ERRORS = require("../config/errors")

const authentication = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization
    if (!authHeaders) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }
    const token = authHeaders && authHeaders.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: 'Forbidden'
        })
      }
      req.user = user
      next()
    })
  } catch (err) {
    throw err
  }
}

module.exports = authentication;