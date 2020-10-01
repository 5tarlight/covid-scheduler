import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  NotFound,
  Start
} from '../pages'
import Header from './header/Header/Header'

const App = () => {
  const headerLinks = [
    { link: '/', name: '홈' },
    { link: '/start', name: '시작하기' }
  ]

  return (
    <div>
      <Header links={headerLinks} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/start' component={Start} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
