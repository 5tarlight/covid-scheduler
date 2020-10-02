import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import covid from './covid'
import input from './input'
import todo from './todo'

export default combineReducers({
  covid,
  pender: penderReducer,
  input,
  todo
})
