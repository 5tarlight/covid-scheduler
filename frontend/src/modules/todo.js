import { Map, List } from 'immutable'
import { handleActions, createAction } from 'redux-actions'
import { server } from './secret'
import axios from 'axios'

const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'

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

async function updateState() {
  const res = await axios.get('http://' + server + '/api/todo/getlist')
  const list = []
  res.data.todo.forEach(t => {
    list.push(Map(t))
  })
  return List(list)
}

export default handleActions({
  [INSERT]: (state, action) => {
    const { id, text, done } = action.payload

    state.then(r => {
      r.push(Map({
        id,
        text,
        done
      }))
    })
    
    return state
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
}, updateState())
