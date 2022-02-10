const express = require('express')

const { Errors } = require('./lib/constants')
const allowedMethods = require('./middlewares/allowed-methods')

const app = express()
app.use(allowedMethods)

const router = express.Router({ caseSensitive: false })
const port = process.env.PORT || 8080

const loadRoutes = () => {
  const { join } = require('path')
  const { readdirSync } = require('fs')

  readdirSync(join(__dirname, './apis')).filter(file => file.endsWith('.js')).forEach(file => {
    require(`./apis/${file}`)(router)
  })

  router.get('*', (req, res) => {
    res.status(404).send(Errors.INVALID_ROUTE)
  })

  app.use('/api', router)
}

loadRoutes()

app.listen(port, () => {
  console.log(`Useless api is running! Listening to port ${port}`)
})
