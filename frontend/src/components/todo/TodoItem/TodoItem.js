import React, { Component } from 'react'
import styles from './TodoItem.scss'
import classNames from 'classnames/bind'
import { ModifyModal } from '../../'

const cx = classNames.bind(styles)

class TodoItem extends Component {
  render () {
    const { done, children, onToggle, onRemove, onModify } = this.props

    return (
      <div className={cx('todo-item', 'no-drag')} onClick={onToggle}>
        <div className={cx('arrange-box')}>
          <img src={'/arrow-up.png'} className={'arrow-up'} alt={'올리기'}/>
          <img src={'/arrow-down.png'} className={'arrow-down'} alt={'내리기'} />
        </div>

        <input className={cx('tick')} type='checkbox' checked={done} readOnly />
        <div className={cx('text', 'no-drag', { done })}>{children}</div>

        <ModifyModal onModify={onModify} />
        {/* <div className={(cx('delete'))} onClick={e => {
          e.stopPropagation()
          onModify()
        }}>[수정]</div> */}

        <div
          className={cx('delete')} onClick={e => {
            e.stopPropagation()
            onRemove()
          }}
        >[지우기]
        </div>
      </div>
    )
  }
}

export default TodoItem
