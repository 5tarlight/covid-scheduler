import React, { Component } from 'react'
import styles from './CovidText.scss'
import classNames from 'classnames/bind'
import { server } from '../../modules/secret'
import axios from 'axios'

const cx = classNames.bind(styles)

async function getCovidApi() {
  const url = 'http://' + server + '/api/covid/confirmed'
  return axios.get(url)
}

class CovidText extends Component {
  state = {
    confirmed: 0
  }

  render() {
    return (
      <p className={cx('covid-text')}>확진자 {this.state.confirmed}명</p>
    )
  }

  componentDidMount() {
    getCovidApi().then(res => {
      this.setState({
        confirmed: res.data.confirmed
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.confirmed === nextState.confirmed
  }
}

export default CovidText
