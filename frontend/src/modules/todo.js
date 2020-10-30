import { Map, List } from 'immutable'
import { handleActions, createAction } from 'redux-actions'
import { server } from './secret'
import axios from 'axios'
import { pender } from 'redux-pender'

const LOAD = 'todo/LOAD'
const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'
const MODIFY = 'todo/MODIFY'
const MOVE_UP = 'todo/UP'
const MOVE_DOWN = 'todo/DOWN'

export const load = createAction(LOAD, getTodoList)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)
export const modify = createAction(MODIFY)
export const moveUp = createAction(MOVE_UP)
export const moveDown = createAction(MOVE_DOWN)

const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true,
    detail: {
      detail: '',
      place: '',
      loc: ''
    }
  }),
  Map({
    id: 1,
    text: '컴포넌트 스타일링 해보기',
    done: false,detail: {
      detail: '',
      place: '',
      loc: ''
    }

  })
])

function getTodoList () {
  return axios.get('http://' + server + '/api/todo/getlist')
}

function getMax (list) {
  let m = -1
  list.forEach(e => {
    if (e.get('id') > m) m = e.get('id')
  })
  return m
}

export default handleActions({
  ...pender({
    type: LOAD,
    onSuccess: (state, action) => {
      const { todos } = action.payload.data
      const list = []
      todos.forEach(todo => {
        list.push(Map(todo))
      })

      list.sort((a, b) => {
        return a.get('id') - b.get('id')
      })

      return List(list)
    }
  }),
  [INSERT]: (state, action) => {
    const { text ,done } = action.payload
    const id = getMax(state) + 1

    const updated = state.push(Map({
      id,
      text,
      done,
      detail: {
        detail: '',
        place: '',
        loc: ''
      }
    }))

    axios.post(`http://${server}/api/todo/savelist`, {
      todo: updated
    })

    return updated
  },
  [TOGGLE]: (state, action) => {
    const { payload: id } = action
    const index = state.findIndex(todo => todo.get('id') === id)

    const updated = state.updateIn([index, 'done'], done => !done)

    axios.post(`http://${server}/api/todo/savelist`, {
      todo: updated
    })

    return updated
  },
  [REMOVE]: (state, action) => {
    const { payload: id } = action
    const index = state.findIndex(todo => todo.get('id') === id)
    const updated = state.delete(index)

    axios.post(`http://${server}/api/todo/savelist`, {
      todo: updated
    })

    return updated
  },
  [MODIFY]: (state, action) => {
    const { id, text, detail } = action.payload
    const index = state.findIndex(todo => todo.get('id') === id)

    if (!(text && text.trim())) return state // if value of title is null return

    const updated = state.updateIn([index, 'text'], t => text).updateIn([index, 'detail'], d => detail)

    axios.post(`http://${server}/api/todo/savelist`, {
      todo: updated
    })
    return updated
  },
  [MOVE_UP]: (state, action) => {
    const { payload: id } = action
    const index = state.findIndex(todo => todo.get('id') === id)

    if (index === 0) return state

    const prevId = state.get(index - 1).get('id')

    const updated = state.updateIn([index, 'id'], id => prevId).updateIn([prevId, 'id'], id => index)
      .sort((a, b) => {
        return a.get('id') - b.get('id')
      })

    axios.post(`http://${server}/api/todo/savelist`, {
      todo: updated
    })
    return updated
  },
  [MOVE_DOWN]: (state, action) => {
    const { payload: id } = action
    const index = state.findIndex(todo => todo.get('id') === id)

    if (index === state.size - 1) return state

    const nextId = state.get(index + 1).get('id')

    const updated = state.updateIn([index, 'id'], id => nextId).updateIn([nextId, 'id'], id => index)
      .sort((a, b) => {
        return a.get('id') - b.get('id')
      })

    axios.post(`http://${server}/api/todo/savelist`, {
      todo: updated
    })

    return updated
  }
}, initialState)
