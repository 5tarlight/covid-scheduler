const fs = require('fs')
const Logger = require('korean-logger')

module.exports.handle = (req, res, next) => {
  const ip = req.ip
  const todo = req.body.todo
  const path = `${__dirname}\\todoData\\${ip.split(':').join('')}.json`

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path)
    }

    const data = JSON.stringify(todo)

    fs.writeFileSync(path, data)
  } catch (err) {
    Logger.error(err)
  }

  res.json({
    status: 'success'
  })
}
