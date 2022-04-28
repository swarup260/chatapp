module.exports = class ApplicationError extends Error {
    constructor(request,...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params)
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ApplicationError)
      }
  
      this.name = 'ApplicationError'
      this.request = request
      this.code = 1001
    }
  }