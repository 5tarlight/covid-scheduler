import React from 'react'
import styles from './TodoTemplate.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const TodoTemplate = ({ children }) => {
  return (
    <div className={(cx('page-template'))}>
      <h1>일정 관리</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
}

export default TodoTemplate
