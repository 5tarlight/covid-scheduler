import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as covidActions from '../modules/covid'
import { CovidText } from '../components'

class CovidContainer extends Component {
  render () {
    const { CovidActions, confirmed } = this.props

    return (
      <div>
        <CovidText confirmed={confirmed} />
        <button onClick={CovidActions.getCovid}>갱신</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    confirmed: state.covid.confirmed
  }),
  dispatch => ({
    CovidActions: bindActionCreators(covidActions, dispatch)
  })
)(CovidContainer)
