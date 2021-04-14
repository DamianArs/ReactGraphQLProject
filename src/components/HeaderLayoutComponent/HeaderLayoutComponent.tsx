import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';



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
  
},
{
  name: 'HeaderLayoutComponent'
}
)
export const HeaderLayoutComponent: React.FC = ({children}) => {
  console.log('test')
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.header}>GraphQL Project</div>
      {children}
    </div>
  )
}