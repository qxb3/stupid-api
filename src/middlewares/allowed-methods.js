const { Errors } = require('../lib/constants')

const allowedMethods = ['GET']

module.exports = (req, res, next) => {
  if (allowedMethods.includes(req.method)) {
    return next()
  }

  res.send(Errors.INVALID_METHOD)
}
