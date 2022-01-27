const UserService = require('../services/user-service')

class UserController {
    static register = async (req, res) => {
        try {
            const {email, password, first_name, last_name} = req.body
            const register = await UserService.register({email, password, first_name, last_name})
            return res.status(200).json(register)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserController;