import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import covid from './covid'

export default combineReducers({
  covid,
  pender: penderReducer
})
