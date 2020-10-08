const fs = require('fs')
const Logger = require('korean-logger')

module.exports.handle = (req, res, next) => {
  const ip = req.ip
  const todo = req.body.todo
  const path = `${__dirname}\\todo\\${ip.split(':').join('')}.json`
  console.log(path)

  try {
    if (fs.existsSync(path)) {
      fs.unlink(path)
    }

    // fs.open(path, 'w', (err, file) => {
    //   if (err) throw err

    // })

    fs.writeFileSync(path, JSON.stringify(todo))
  } catch (err) {
    Logger.error(err.toString())
  }

  res.json({
    status: 'success'
  })
}
