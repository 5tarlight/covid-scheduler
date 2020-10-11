const { serviceKey } = require('./secret')
const axios = require('axios')
const Logger = require('korean-logger')
const moment = require('moment')

module.exports.handle = (req, res, next) => {
  const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'

  const now = new Date()
  const today = moment(now).format('YYYYMMDD')
  now.setDate(now.getDate() - 1)
  const yesterday = moment(now).format('YYYYMMDD')

  const queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + serviceKey +
   '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-') +
   '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(yesterday) +
   '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(today)

  axios.get(url + queryParams).then(result => {
    const items = result.data.response.body.items.item

    if (!items || !items[0] || !items[0].decideCnt) {
      res.json({
        newDecided: 0,
        decided: 0,
        isApiDown: true
      })

      return
    }

    const dicide = items[0].decideCnt
    const gap = items[0].decideCnt - items[1].decideCnt
    res.json({
      newDecided: gap,
      decided: dicide,
      isApiDown: false
    })
  }).catch(err => {
    Logger.error(err.toString())
  })
}
