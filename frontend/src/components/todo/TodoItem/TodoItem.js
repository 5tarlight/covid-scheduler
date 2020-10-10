import React, { Component } from 'react'
import styles from './TodoItem.scss'
import classNames from 'classnames/bind'
// import { ModifyModal } from '../../'

const cx = classNames.bind(styles)

class TodoItem extends Component {
  render () {
    const { done, children, onToggle, onRemove, onModify } = this.props

    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type='checkbox' checked={done} readOnly />
        <div className={cx('text', { done })}>{children}</div>
        
        {/* <ModifyModal onModify={onModify} /> */}
        <div className={(cx('delete'))} onClick={e => {
          e.stopPropagation()
          onModify()
        }}>[수정]</div>

        <div className={cx('delete')} onClick={e => {
          e.stopPropagation()
          onRemove()
        }}>[지우기]</div>
      </div>
    )
  }
}

export default TodoItem
