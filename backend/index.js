const express = require('express')
const cors = require('cors')
const Logger = require('korean-logger')

const app = express()

app.use(cors())

app.set('port', 5676)

app.listen(app.get('port'), () => {
  Logger.success(`Server is running on ${app.get('port')} port`)
})
