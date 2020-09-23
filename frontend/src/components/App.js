import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  NotFound
} from '../pages'
import Header from './header/Header/Header'

const App = () => {
  const headerLinks = [
    { link: '/', name: '홈' },
    { link: '/login', name: '로그인'}
  ]

  return (
    <div>
    <Header links={headerLinks}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
