import { VFC, memo } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../components/pages/Login'

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/home' render={() => (
        <Switch></Switch>
      )} />
    </Switch>
  )
})
