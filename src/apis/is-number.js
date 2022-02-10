const { isNumberOnly } = require('../lib/utils')
const { ErrorTypes, ErrorMessages } = require('../lib/constants')

module.exports = (router) => {
  router.get('/isnumber/:string?', (req, res) => {
    const string = req.params.string
    if (!string) {
      return res.status(400).send({
        error: ErrorTypes.NO_PARAMETERS,
        message: ErrorMessages.NO_PARAMETERS
      })
    }

    res.send({ result: isNumberOnly(string) })
  })
}
