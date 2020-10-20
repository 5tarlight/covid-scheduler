import React, { Component } from 'react'
import styles from './TodoItem.scss'
import classNames from 'classnames/bind'
import { ModifyModal } from '../../'
import { server } from '../../../modules/secret'

const cx = classNames.bind(styles)

class TodoItem extends Component {
  render () {
    const {
      done,
      detail,
      children,
      onToggle,
      onRemove,
      onModify,
      onMoveUp,
      onMoveDown
    } = this.props

    const handleClick = (e, handler) => {
      e.stopPropagation();
      handler();
    }

    return (
      <div className={cx('todo-item', 'no-drag')} onClick={onToggle}>
        <div className={cx('arrange-box')}>
          <img src={`http://${server}/img/arrow-up.png`} className={'arrow-up'} alt={'올리기'} onClick={e => handleClick(e, onMoveUp)}/>
          <img src={`http://${server}/img/arrow-down.png`} className={'arrow-down'} alt={'내리기'} onClick={e => handleClick(e, onMoveDown)}/>
        </div>

        <input className={cx('tick')} type='checkbox' checked={done} readOnly />
        <div className={cx('text', 'no-drag', { done })}>{children}</div>

        <ModifyModal
          onModify={onModify}
          text={children}
          detail={detail.detail}
          place={detail.place}
          loc={detail.loc}
        />
        {/* <div className={(cx('delete'))} onClick={e => {
          e.stopPropagation()
          onModify()
        }}>[수정]</div> */}

        <div
          className={cx('delete')} onClick={e=> handleClick(e, onRemove)}
        >[지우기]
        </div>
      </div>
    )
  }
}

export default TodoItem
