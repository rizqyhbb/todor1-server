const jwt = require('jsonwebtoken')
const ERRORS = require('../config/errors')
const { users } = require('../models')
const { hashPassword, comparePassword } = require('../utils/encryption')
const { isEmpty } = require('../utils/validator')

class UserService {
    static register = async ({
        email,
        password,
        first_name,
        last_name,
    }) => {
        try {
            if (isEmpty(email) || isEmpty(password) || isEmpty(first_name) || isEmpty(last_name)) {
                throw new Error(ERRORS.INPUT_CANNOT_BE_EMPTY)
            }
            const findUser = await users.findOne({
                where: {
                    email
                }
            })
            if (findUser) {
                throw new Error(ERRORS.EMAIL_ALREADY_EXIST)
            }
            const user = await users.create({
                email,
                password: hashPassword(password),
                first_name,
                last_name
            })
            return user
        } catch (err) {
            throw err
        }
    }

    static auth = async ({
        email, password
    }) => {
        try {
            if (isEmpty(email) || isEmpty(password)) {
                throw new Error(ERRORS.INPUT_CANNOT_BE_EMPTY)
            }
            const findUser = await users.findOne({
                where: {
                    email
                }
            })
            if (!findUser) {
                throw new Error(ERRORS.EMAIL_DOESNOT_EXIST)
            }
            const compare = comparePassword(password, findUser.password)
            if (!compare) {
                throw new Error(ERRORS.PASSWORD_MISMATCH)
            }
            const payload = {
                id: findUser.id,
                email: findUser.email,
                first_name: findUser.first_name,
                last_name: findUser.last_name
            }
            const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })

            return token

        } catch (err) {
            throw err
        }
    }
}

module.exports = UserService;