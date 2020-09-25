import { handleActions, createAction } from 'redux-actions'
import { pender } from 'redux-pender'
import axios from 'axios'
import { serviceKey } from './secret'

function getCovidApi() {
  return axios.get(`http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?ServiceKey=${serviceKey}`)
}

const GET_COVID = 'covid/GET_COVID'

export const getCovid = createAction(GET_COVID, getCovidApi)

const initialState = {
  covid: {
    confirmed: 0
  }
}

export default handleActions({
  ...pender({
    type: GET_COVID,
    onSuccess: (state, action) => {
      const { confirmed } = action.payload.covid
      return {
        covid: confirmed
      }
    }
  })
}, initialState)
