const express = require('express')
const cors = require('cors')
const Logger = require('korean-logger')
const routes = require('./router/routes')

const app = express()

app.use(express.json())
app.use(cors())

routes.forEach(route => {
  app[route.type](route.url, (req, res, next) => {
    Logger.info(`${req.url} : ${req.ip}`)

    const callback = require('./router/handler/' + route.handler).handle

    callback(req, res, next)
  })

  Logger.debug(`${route.url} (${route.type}) route added`)
})

app.set('port', 5676)

app.listen(app.get('port'), () => {
  Logger.success(`Server is running on ${app.get('port')} port`)
})
