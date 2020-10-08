import { Map, List } from 'immutable'
import { handleActions, createAction } from 'redux-actions'
import { server } from './secret'
import axios from 'axios'
import { pender } from 'redux-pender'

const LOAD = 'todo/LOAD'
const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'

export const load = createAction(LOAD, getTodoList)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

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

export default handleActions({
  ...pender({
    type: LOAD,
    onSuccess: (state, action) => {
      const { todos } = action.payload.data
      const list = []
      todos.forEach(todo => {
        list.push(todo)
      })

      return List(list)
    }
  }),
  // ...pender({
  //   type: INSERT,
  //   onSuccess: (state, action) => {
  //     
  //   }
  // }),
  [INSERT]: (state, action) => {
    const { id, text, done } = action.payload

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

    return state.updateIn([index, 'done'], done => !done)
  },
  [REMOVE]: (state, action) => {
    const { payload: id } = action
    const index = state.findIndex(todo => todo.get('id') === id)
    return state.delete(index)
  }
}, initialState)
