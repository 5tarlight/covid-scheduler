const fs = require('fs')
const Logger = require('korean-logger')

module.exports.handle = (req, res, next) => {
  const defaultTodo = [
    {
      id: 0,
      text: '리액트 공부하기',
      done: true,
      detail: {
        detail: '',
        place: '',
        loc: ''
      }
    },
    {
      id: 1,
      text: '저장기능 만들기',
      done: false,
      detail: {
        detail: '',
        place: '',
        loc: ''
      }
    }
  ]

  const ip = req.ip
  const path = `${__dirname}\\todoData\\${ip.split(':').join('')}.json`

  try {
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, JSON.stringify(defaultTodo))
    }

    const todo = JSON.parse(fs.readFileSync(path))
    res.json({ todos: todo })
  } catch (err) {
    Logger.error(err.toString())
  }
}
