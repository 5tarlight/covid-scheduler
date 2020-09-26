import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import * as serviceWorker from './serviceWorker'

import modules from './modules'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import penderMiddleware from 'redux-pender'

const store = createStore(modules, applyMiddleware(
  penderMiddleware())
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
