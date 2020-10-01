const { serviceKey } = require('./secret')
const axios = require('axios')
const Logger = require('korean-logger')

module.exports.handle = (req, res, next) => {
  const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'

  const now = new Date()
  // const date = parseInt(`${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`)

  const queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + serviceKey + /* Service Key */
   '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-') /**/
  //  + '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1') /**/
  //  + '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10') /**/
  //  + '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(date.toString()) /**/
  //  + '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent((date + 1).toString()) /**/

  axios.get(url + queryParams).then(result => {
    const decide = result.data.response.body.items.item.decideCnt
    res.json({ confirmed: decide })
  }).catch(err => {
    Logger.error(err.toString())
  })
}
