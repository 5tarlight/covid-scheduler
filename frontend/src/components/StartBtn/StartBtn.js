import React from 'react'
import styles from './StartBtn.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const StartBtn = () => (
  <Link className={cx('start-btn-link')} to='/todo'>
    <div className={cx('start-btn-box')}>
      <p className={cx('start-btn-text')}>시작하기</p>
    </div>
  </Link>
)

export default StartBtn
