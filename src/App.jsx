import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import RolesPage from './pages/RolesPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/roles" component={RolesPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
