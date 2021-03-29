import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ProjectBreadCrumbs } from '../ProjectBreadCrumbs';


const useStyles = makeStyles({
  root:{
    minHeight: '100vh',
    background: "#f0eeee"
  },
  header: {
    display: 'flex',
    background: 'black',
    height: '70px',
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    fontSize: '24px'
  },
  line:{
    margin: '0 30px 40px 30px',
    height: '1px', 
    background: 'gray'
  }
},
{
  name: 'HeaderLayoutComponent'
}
)
export const HeaderLayoutComponent: React.FC = ({children}) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.header}>GraphQL Project</div>
      <ProjectBreadCrumbs />
      <div className={classes.line}/>
      {children}
    </div>
  )
}