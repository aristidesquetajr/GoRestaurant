import { Routes as Switch, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'

export function Routes() {
  return (
    <Switch>
      <Route path="/" Component={Dashboard} />
    </Switch>
  )
}
