import React, { Component } from 'react'
import { TodoItem } from '../../'

class TodoList extends Component {
  state = {
    todoList: (<div />)
  }

  renderTodo(todo, onToggle, onRemove) {
    return todo.then(t => {
      const result = t.map(
        todo => {
          return (
            <TodoItem
              key={todo.get('id')}
              done={todo.get('done')}
              onToggle={() => onToggle(todo.get('id'))}
              onRemove={() => onRemove(todo.get('id'))}
            >
              {todo.get('text')}
            </TodoItem>
          )
        }
      )

      this.setState({
        ...this.state,
        todoList: result
      })
      return result
    })
  }

  render () {
    console.dir(this.state.todoList)
    return (
      <div>
        {this.state.todoList}
      </div>
    )
  }

  componentDidMount() {
    const { todo, onToggle, onRemove } = this.props
    this.renderTodo(todo, onToggle, onRemove)
  }
}

export default TodoList
