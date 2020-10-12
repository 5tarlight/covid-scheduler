import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from '../modules/todo'
import { RearangeList } from '../components'

class RearangeContainer extends Component {
  componentDidMount() {
    const { TodoActions } = this.props
    TodoActions.load()
  }

  render() {
    const { todo } = this.props

    return (
      <RearangeList todo={todo} />
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
)(RearangeContainer)
