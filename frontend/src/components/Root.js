import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '../styles/global.scss'

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root
