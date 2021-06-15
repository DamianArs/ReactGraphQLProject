import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from 'react-router';
import { Customer } from '../../Types';
import { addStoreDispatch } from '../../Store/middlewares';




const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
    padding: '0 30px'
  },
  button:{
    display: 'flex',
    paddingLeft: '32px',
    alignItems: 'center',
    width: '400px',
    height:'200px',
    boxSizing: 'border-box',
    '&:hover':{
      border: '1px solid black'
    }
  },
  listIcon:{
    padding: '10px',
    background: '#c0bebe',
    borderRadius: '50px',
    fontSize: '36px', 
    color: 'black',
    marginRight: '20px'
  },
  line:{
    margin: '0 30px 40px 30px',
    height: '1px', 
    background: 'gray'
  }
},
{
  name: 'ConsoleComponent'
}
)

interface InitialStates{
  customersReducer:{
    customers: Customer[]
    total: number
  }
}

export const ConsoleComponent:React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleRoute = () => {
    history.push('/List')  
  }

  return(
    <div className={classes.root}>
      <Paper className={classes.button} onClick={handleRoute}>
        <ListAltIcon className={classes.listIcon}/>
        <div style={{fontSize: '24px'}}>
          List of Customers
        </div>
      </Paper>
    </div>
  )
}