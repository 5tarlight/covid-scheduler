import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RearangeBtn.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const RearangeBtn = () => (
  <Link to='/todo/rearange' style={{ textDecoration: 'none' }}>
    <button className={cx('rerange-btn')}>정렬</button>
  </Link>
)

export default RearangeBtn
