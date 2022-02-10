const { isNumberOnly } = require('../lib/utils')
const { ErrorTypes } = require('../lib/constants')

module.exports = (router) => {
  router.get('/divide', (req, res) => {
    const { firstNum, secondNum } = req.query

    if (!firstNum || !secondNum) {
      return res.status(400).send({
        error: ErrorTypes.INVALID_QUERY,
        message: `${!firstNum ? 'firstNum' : 'secondNum'} is required`
      })
    }

    if (!isNumberOnly(firstNum) || !isNumberOnly(secondNum)) {
      return res.status(400).send({
        error: ErrorTypes.INVALID_QUERY_TYPE,
        message: `${!isNumberOnly(firstNum) ? 'firstNum' : 'secondNum'} cannot have any letters or special characters`
      })
    }

    res.send({ result: parseInt(firstNum) / parseInt(secondNum) })
  })
}
