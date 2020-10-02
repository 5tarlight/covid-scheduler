import React from 'react'
import styles from './TodoInput.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const TodoInput = () => {
  // const handleKeyPress = e => {
  //   if (e.key === 'Enter') {

  //   }
  // }

  return (
    <div className={cx('todo-input')}>
      <input />
      <div className={cx('add-button')}>추가</div>
    </div>
  )
}

export default TodoInput
