import React, { Component } from 'react'
import styles from './TodoItem.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class TodoItem extends Component {
  render () {
    const { done, children } = this.props

    return (
      <div className={cx('todo-item')}>
        <input className={cx('tick')} type='checkbox' checked={done} readOnly />
        <div className={cx('text', { done })}>{children}</div>
        <div className={cx('delete')}>[지우기]</div>
      </div>
    )
  }
}

export default TodoItem
