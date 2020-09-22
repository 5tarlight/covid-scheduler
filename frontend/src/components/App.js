import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  NotFound
} from '../pages'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
