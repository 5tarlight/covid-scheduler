const fs = require('fs')

module.exports.handle = (req, res, next) => {
  const ip = req.ip
  const path = `${__dirname}\\todo\\${ip.split(':').join('')}.json`

  res.json({
    todo: [
      {
        id: 0,
        text: '리액트 공부하기',
        done: true
      },
      {
        id: 1,
        text: '저장기능 만들기',
        done: false
      }
    ]
  })
}
