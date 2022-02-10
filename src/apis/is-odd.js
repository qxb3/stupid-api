const { isNumberOnly, isOdd } = require('../lib/utils')
const { ErrorTypes, ErrorMessages } = require('../lib/constants')

module.exports = (router) => {
  router.get('/isodd/:number?', (req, res) => {
    const number = req.params.number
    if (!number) {
      return res.status(400).send({
        error: ErrorTypes.NO_PARAMETERS,
        message: ErrorMessages.NO_PARAMETERS
      })
    }

    if (!isNumberOnly(number)) {
      return res.status(400).send({
        error: ErrorTypes.INVALID_PARAMETERS,
        message: ErrorMessages.NUMBERS_ONLY
      })
    }

    res.send({ result: isOdd(parseInt(number)) })
  })
}
