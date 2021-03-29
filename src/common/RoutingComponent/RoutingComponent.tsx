import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DisplayComponent, ListComponent } from '../../components'
import { ConsoleComponent } from '../../components/ConsoleComponent/ConsoleComponent'

export const RoutingComponent = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={ConsoleComponent}/>
        <Route exact path='/List' component={ListComponent}/>
        <Route exact path='/List/:uuid' component={DisplayComponent}/>
      </Switch>
     </Router>
  )
}