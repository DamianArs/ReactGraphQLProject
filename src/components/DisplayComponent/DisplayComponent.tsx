import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
    padding: '0 30px'
  },
  
  line:{
    margin: '0 30px 40px 30px',
    height: '1px', 
    background: 'gray'
  }
},
{
  name: 'DisplayComponent'
}
)

export const DisplayComponent:React.FC = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      display
    </div>
  )
}