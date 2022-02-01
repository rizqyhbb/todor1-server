const UserService = require('../services/user-service')
const { getError } = require('./base-controller')
class UserController {
    static register = async (req, res) => {
        try {
            const { email, password, first_name, last_name } = req.body
            const register = await UserService.register({ email, password, first_name, last_name })
            return res.status(200).json(register)
        } catch (err) {
            const error = getError(err)
            console.log(error)
            return res.status(error.code).json(error.message)
        }
    }

    static login = async (req, res) => {
        try {
            const { email, password } = req.body
            const auth = await UserService.auth({ email, password })
            return res.status(200).json(auth)
        } catch (err) {
            const error = getError(err)
            console.log(error)
            return res.status(error.code).json(error.message)
        }
    }
}

module.exports = UserController;