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
    confirmed: 0,
    gap: 0
  }

  render() {
    return (
      <div>
        <p className={cx('covid-text')}>확진자 {this.state.confirmed}명</p>
        <p className={cx('covid-new')}>(+{this.state.gap})</p>
      </div>
    )
  }

  componentDidMount() {
    getCovidApi().then(res => {
      this.setState({
        confirmed: res.data.decided,
        gap: res.data.newDecided
      })
    })  
  }
}

export default CovidText
