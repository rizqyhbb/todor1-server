const ERRORS = require("../config/errors");

class BaseController {
  static getError = (err) => {
    console.log(err);

    switch (err.message) {
      case ERRORS.BAD_REQUEST: return {
        code: 400,
        message: 'Bad Request'
      }
      case ERRORS.EMAIL_ALREADY_EXIST: return {
        code: 400,
        message: 'Email Already Exist'
      }
      case ERRORS.INPUT_CANNOT_BE_EMPTY: return {
        code: 400,
        message: 'Input Cannot be Empty'
      }
      case ERRORS.EMAIL_DOESNOT_EXIST: return {
        code: 400,
        message: 'Email Doesnot Exist'
      }
      case ERRORS.PASSWORD_MISMATCH: return {
        code: 400,
        message: 'Password Mismatch'
      }
      case ERRORS.UNAUTHORIZED: return {
        code: 401,
        message: 'Unauthorized'
      }
      case ERRORS.FORBIDDEN: return {
        code: 403,
        message: 'Forbidden'
      }
      case ERRORS.NOT_FOUND: return {
        code: 404,
        message: 'Not Found'
      }
      case ERRORS.INTERNAL_SERVER_ERROR: return {
        code: 500,
        message: 'Internal Server Error'
      }
    }
  }
}

module.exports = BaseController