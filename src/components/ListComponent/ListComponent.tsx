import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';


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
  name: 'ListComponent'
}
)
export const ListComponent:React.FC = () => {
  const classes = useStyles();
  const history = useHistory()
  const handleRoute = () => {
    history.push('/List/uuid')
  }
  return(
    <div className={classes.root}>
      <button onClick={handleRoute}>list</button>
    </div>
  )
}