const ERRORS = require('../config/errors')
const { users } = require('../models')
const { hashPassword } = require('../utils/encryption')

class UserService {
    static register = async ({
        email,
        password,
        first_name,
        last_name,
    }) => {
        try {
            if (!email || !password || !first_name || !last_name) {
                throw new Error(ERRORS.BAD_REQUEST)
            }
            const user = await users.create({
                email,
                password: hashPassword(password),
                first_name,
                last_name
            })
            return user
        } catch (err) {
            const sequelizeErrorMessage = err.errors[0].message
            if (sequelizeErrorMessage === ERRORS.BAD_REQUEST) {
                throw new Error(ERRORS.BAD_REQUEST)
            }

            throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
        }
    }
}

module.exports = UserService;