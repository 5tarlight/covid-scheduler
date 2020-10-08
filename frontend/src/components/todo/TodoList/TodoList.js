import React, { Component } from 'react'
import { TodoItem } from '../../'

class TodoList extends Component {
  render () {
    const { todo, onToggle, onRemove } = this.props

    const result = todo.map(
      t => {
        return (
          <TodoItem
            key={t.get('id')}
            done={t.get('done')}
            onToggle={() => onToggle(t.get('id'))}
            onRemove={() => onRemove(t.get('id'))}
          >
            {t.get('text')}
          </TodoItem>
        )
      }
    )

    return (
      <div>
        {result}
      </div>
    )
  }
}

export default TodoList
