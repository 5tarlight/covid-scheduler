import React, { Component } from 'react'
import { TodoItem } from '../../'

class TodoList extends Component {
  render () {
    const { todo, onToggle, onRemove } = this.props
    const todoList = todo.map(
      todo => (
        <TodoItem
          key={todo.get('id')}
          done={todo.get('done')}
          onToggle={() => onToggle(todo.get('id'))}
          onRemove={() => onRemove(todo.get('id'))}
        >
          {todo.get('text')}
        </TodoItem>
      )
    )

    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoList
