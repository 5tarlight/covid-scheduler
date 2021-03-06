import React, { Component } from 'react'
import { TodoItem } from '../../'

class TodoList extends Component {
  render () {
    const { todo, onToggle, onRemove, onModify, onMoveUp, onMoveDown } = this.props

    const result = todo.map(
      t => {
        return (
          <TodoItem
            key={t.get('id')}
            done={t.get('done')}
            detail={t.get('detail')}
            onToggle={() => onToggle(t.get('id'))}
            onRemove={() => onRemove(t.get('id'))}
            onModify={(text, detail) => onModify(t.get('id'), text, detail)}
            onMoveUp={() => onMoveUp(t.get('id'))}
            onMoveDown={() => onMoveDown(t.get('id'))}
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
