import React from 'react'
import styles from './CovidText.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const CovidText = ({ confirmed }) => {
  let isBig = false, isMedium = false, isSmall = false

  if (confirmed <= 10) isBig = true
  else if (confirmed <= 100) isMedium = true
  else isBig = true

  return (
    <p className={cx({
      'big': isBig,
      'medium': isMedium,
      'small': isSmall
    })}>확진자 {confirmed}명</p>
  )
}

CovidText.propTypes = {
  confirmed: PropTypes.number
}

CovidText.defaultProps = {
  confirmed: 0
}

export default CovidText
