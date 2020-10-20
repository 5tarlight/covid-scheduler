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

  handleModify = (id, text, detail) => {
    const { TodoActions } = this.props
    TodoActions.modify({
      id,
      text,
      detail
    })
  }

  handleMoveUp = id => {
    const { TodoActions } = this.props
    TodoActions.moveUp(id)
  }

  handleMoveDown = id => {
    const { TodoActions } = this.props
    TodoActions.moveDown(id)
  }

  componentDidMount() {
    const { TodoActions } = this.props
    TodoActions.load()
  }

  render() {
    const { todo } = this.props

    return (
      <TodoList
        todo={todo}
        onToggle={this.handleToggle}
        onRemove={this.handleRemove}
        onModify={this.handleModify}
        onMoveUp={this.handleMoveUp}
        onMoveDown={this.handleMoveDown}
      />
    )
  }
}

export default connect(
  state => ({
    todo: state.todo,
    loadingTodo: state.pender.pending['todo/LOAD'],
    loadingTodoError: state.pender.failure['todo/LOAD'],
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodoListContainer)
