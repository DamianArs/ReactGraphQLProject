import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from 'react-router';
import { Customer } from '../../Types';
import AccountTreeIcon from '@material-ui/icons/AccountTree';




const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'row',
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
    },
    marginRight: '20px'
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
  const handleRouteList = () => {
    history.push('/List')  
  }
  const handleRouteNodes = () => {
    history.push('/Nodes')  
  }

  return(
    <div className={classes.root}>
      <Paper className={classes.button} onClick={handleRouteList}>
        <ListAltIcon className={classes.listIcon}/>
        <div style={{fontSize: '24px'}}>
          List of Customers
        </div>
      </Paper>
      <Paper className={classes.button} onClick={handleRouteNodes}>
        <AccountTreeIcon className={classes.listIcon}/>
        <div style={{fontSize: '24px'}}>
          Nodes
        </div>
      </Paper>
    </div>
  )
}