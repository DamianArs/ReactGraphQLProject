import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ProjectBreadCrumbs } from '../ProjectBreadCrumbs';


const useStyles = makeStyles({
  root:{
    minHeight: '100vh',
    background: '#d1cccc'
  },
  header: {
    display: 'flex',
    background: 'black',
    height: '70px',
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    fontSize: '24px'
  }
},
{
  name: 'HeaderLayoutComponent'
}
)
export const HeaderLayoutComponent: React.FC = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.header}>GraphQL Project</div>
      <ProjectBreadCrumbs />
    </div>
  )
}