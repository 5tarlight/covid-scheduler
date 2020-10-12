import React, { Component } from 'react'
import styles from './RearangeItem.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class RearangeItem extends Component {
  render() {
    const { done, children } = this.props

    return (
      <div className={cx('todo-item')} >
        <input className={cx('tick')} type='checkbox' checked={done} readOnly />
        <div className={cx('text', { done })}>{children}</div>
      </div>
    )
  }
}

export default RearangeItem
