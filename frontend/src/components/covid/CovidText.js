import React from 'react'
import styles from './CovidText.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const CovidText = ({ confirmed }) => {
  return (
    <p className={cx('covid-text')}>확진자 {confirmed}명</p>
  )
}

CovidText.propTypes = {
  confirmed: PropTypes.number
}

CovidText.defaultProps = {
  confirmed: 0
}

export default CovidText
