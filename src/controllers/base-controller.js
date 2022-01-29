const ERRORS = require("../config/errors");

class BaseController {
  static getError = (err) => {
    console.log(err);

    switch (err.message) {
      case ERRORS.BAD_REQUEST: return {
        code: 400,
        message: 'Bad Request'
      }
      case ERRORS.INTERNAL_SERVER_ERROR: return {
        code: 500,
        message: 'Internal Server Error'
      }
    }
  }
}

module.exports = BaseController