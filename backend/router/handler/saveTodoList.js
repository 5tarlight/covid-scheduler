const fs = require('fs')
const Logger = require('korean-logger')

function err(error) {
  if (error) Logger.error(error.toString())
}

module.exports.handle = (req, res, next) => {
  const ip = req.ip
  const todo = req.body.todo
  const path = `${__dirname}\\todo\\${ip.split(':').join('')}.json`

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path)
    }

    const data = JSON.stringify({
      todos: todo.todos,
      id: todo.id
    })

    fs.writeFileSync(path, data)
  } catch (err) {
    err(err)
  }

  res.json({
    status: 'success'
  })
}
