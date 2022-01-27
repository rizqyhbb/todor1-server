const users = require('../models')
const {hashPassword} = require('../utils/encryption')

class UserService {
    static register = async ({
        email, 
        password, 
        first_name,
        last_name,
    } ) => {
        try {
            if(!email || !password || !first_name || !last_name){
                throw new Error('input invalid')
            }
            const user = await users.create({
                email,
                password: hashPassword(password),
                first_name,
                last_name
            })
            return user
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserService;