import React, { Component } from 'react'
import { TodoItem } from '../../'

class TodoList extends Component {
  render () {
    const { todo, onToggle, onRemove, onModify } = this.props

    const result = todo.map(
      t => {
        return (
          <TodoItem
            key={t.get('id')}
            done={t.get('done')}
            onToggle={() => onToggle(t.get('id'))}
            onRemove={() => onRemove(t.get('id'))}
            onModify={value => onModify(t.get('id'), value)}
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

  shouldComponentUpdate(prevProp, prevState) {
    return prevProp.todo !== this.props.todo
  }
}

export default TodoList
