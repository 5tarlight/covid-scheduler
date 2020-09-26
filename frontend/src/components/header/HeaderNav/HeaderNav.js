import React from 'react'
import styles from './HeaderNav.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const HeaderNav = ({ link, name }) => {
  return (
    <Link
      className={cx('header-nav')}
      to={link}
      style={{ textDecoration: 'none' }}
    >{name}
    </Link>
  )
}

HeaderNav.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

HeaderNav.defaultProps = {
  link: '/',
  name: 'not specified'
}

export default HeaderNav
