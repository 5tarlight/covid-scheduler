module.exports = [
  { url: '/api/covid/confirmed', type: 'get', handler: 'confirmed' },
  { url: '/api/todo/getlist', type: 'get', handler: 'getTodoList' },
  { url: '/api/todo/savelist', type: 'post', handler: 'saveTodoList' }
]
