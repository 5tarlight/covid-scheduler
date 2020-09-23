import React from 'react'
import styles from './HeaderNav.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const HeaderNav = ({ link, name }) => {
  return (
    <Link
      className={cx('header-nav')}
      to={link}
      style={{ textDecoration: 'none' }}
    >{name}</Link>
  )
}

export default HeaderNav
