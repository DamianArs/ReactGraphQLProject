import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DisplayComponent, ListComponent } from '../../components'
import { ConsoleComponent } from '../../components/ConsoleComponent/ConsoleComponent'
import ProjectBreadCrumbs from '../../components/ProjectBreadCrumbs/ProjectBreadCrumbs'
import { makeStyles } from '@material-ui/core/styles';
import { NewCustomerComponent } from '../../components/NewCustomerComponent'
import { useDispatch } from 'react-redux'
import { addStoreDispatch } from '../../Store/middlewares'

const useStyles = makeStyles({
  root:{
  },
  
  line:{
    margin: '0 30px 40px 30px',
    height: '1px', 
    background: 'gray'
  }
},
{
  name: 'RoutingComponent'
}
)

export const RoutingComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(addStoreDispatch())
  },[])
  return(
    <Router>
      <ProjectBreadCrumbs/>
      <div className={classes.line}/>
      <Switch>
        <Route exact path='/' component={ConsoleComponent}/>
        <Route exact path='/List' component={ListComponent}/>
        <Route exact path='/List/NewCustomer' component={NewCustomerComponent}/>
        <Route exact path='/List/:uuid' component={DisplayComponent}/>
      </Switch>
     </Router>
  )
}