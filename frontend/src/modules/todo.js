import { Map, List } from 'immutable'
import { handleActions, createAction } from 'redux-actions'
import { server } from './secret'
import axios from 'axios'
import { pender } from 'redux-pender'

const LOAD = 'todo/LOAD'
const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'
const GET_ID = 'todo/GET_ID'

export const load = createAction(LOAD, getTodoList)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)
export const getId = createAction(GET_ID)

let id = 0

let initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true
  }),
  Map({
    id: 1,
    text: '컴포넌트 스타일링 해보기',
    done: false
  })
])

function getTodoList() {
  return axios.get('http://' + server + '/api/todo/getlist')
  // const list = []
  // res.data.todo.forEach(t => {
  //   list.push(Map(t))
  // })
  // return List(list)
}

function getMax(list) {
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

      id = getMax(list)
      return List(list)
    }
  }),
  [GET_ID]: (state, action) => {

  },
  [INSERT]: (state, action) => {
    const { text, done } = action.payload
    const id = getMax(state) + 1

    const updated = state.push(Map({
      id,
      text,
      done
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
  }
}, initialState)
