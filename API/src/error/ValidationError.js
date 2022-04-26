const ApplicationError = require('./ApplicationError')

module.exports = class ValidationError extends ApplicationError {
    constructor(...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params)
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ValidationError)
      }
  
      this.name = 'ValidationError'
      this.code = 2001
    }
  }