import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.scss'
import HeaderNav from '../HeaderNav/HeaderNav'

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
  const navs = links.map(( nav, key ) => (
    <HeaderNav
      key={key}
      link={nav.link}
      name={nav.name}
    ></HeaderNav>
  ))

  return (
    <div className={cx('header-container')}>
      {navs}
    </div>
  )
}

export default Header
