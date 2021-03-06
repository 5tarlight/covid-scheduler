import React, { Component } from 'react'
import { TodoInput } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as inputActions from '../modules/input'
import * as todoActions from '../modules/todo'

class TodoInputContainer extends Component {
  id = 1
  getId = () => {
    return ++this.id
  }

  handleChange = e => {
    const { value } = e.target
    const { InputActions } = this.props
    InputActions.setInput(value)
  }

  handleInsert = () => {
    const { InputActions, TodoActions, value } = this.props
    const todo = {
      id: this.getId(),
      text: value,
      done: false
    }

    TodoActions.insert(todo)
    InputActions.setInput('')
  }

  render() {
    const { value } = this.props
    const { handleChange, handleInsert } = this

    return (
      <TodoInput
        onChange={handleChange}
        onInsert={handleInsert}
        value={value}
      />
    )
  }
}

export default connect(
  state => ({
    value: state.input.get('value'),
    // waitingInsertion: state.pender.pending['todo/INSERT'],
    // insertionError: state.pender.failure['todo/INSERT']
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodoActions: bindActionCreators(todoActions, dispatch),
  })
)(TodoInputContainer)
