import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.scss'
import HeaderNav from '../HeaderNav/HeaderNav'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

/**
 * @param links
 * array of objects that contain url and name
 *
 * [
 *  {
 *    url: '/',
 *    name: 'home
 *  }
 * ]
*/
const Header = ({ links }) => {
  const navs = links.map((nav, key) => (
    <HeaderNav
      key={key}
      link={nav.link}
      name={nav.name}
    />
  ))

  return (
    <div className={cx('header-container')}>
      {navs}
    </div>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({ link: PropTypes.string.isRequired, name: PropTypes.string.isRequired }))
}

Header.defaultProps = {
  links: []
}

export default Header
