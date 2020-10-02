import React, { Component } from 'react'
import { TodoList } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../modules/todo'

class TodoListContainer extends Component {
  handleToggle = id => {
    const { TodoActions } = this.props
    TodoActions.toggle(id)
  }

  handleRemove = id => {
    const { TodoActions } = this.props
    TodoActions.remove(id)
  }

  render() {
    const { todo } = this.props

    return (
      <TodoList
        todo={todo}
        onToggle={this.handleToggle}
        onRemove={this.handleRemove}
      />
    )
  }
}

export default connect(
  state => ({
    todo: state.todo
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodoListContainer)
