import { Routes as Switch, Route } from 'react-router-dom'
import { Header } from '../components/Header'

export function Routes() {
  return (
    <Switch>
      <Route path="/" Component={Header} />
    </Switch>
  )
}
