import React, { Component } from 'react'
import styles from './CovidText.scss'
import classNames from 'classnames/bind'
import { server } from '../../modules/secret'
import axios from 'axios'

const cx = classNames.bind(styles)

async function getCovidApi() {
  // const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson' /*URL*/
  // const queryParams = '?' + encodeURIComponent('ServiceKey') + '='+ serviceKey /*Service Key*/
  //  + '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-') /**/
  //  + '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1') /**/
  //  + '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10') /**/
  //  + '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200310') /**/
  //  + '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200315') /**/

  // const config = {
  //   headers: {
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*',
  //     'crossdomain': true,
  //     withCredentials: false,
  //   }
  // }

  // querystring.stringify({
  //   serviceKey: serviceKey,
  //   pageNo: 1,
  //   numOfRows: 10
  // })
  const url = 'http://' + server + '/api/covid/confirmed'
  return axios.get(url)

  // const xhr = new XMLHttpRequest();
  
  
  // await xhr.open('GET', url + queryParams)

  // xhr.onreadystatechange = function () {
  //   if (this.readyState === 4) {
  //     console.dir('body: ' + this.responseText)
  //   }
  // }

  // await xhr.send('')
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
}

export default CovidText
