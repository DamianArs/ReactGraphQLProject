import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root:{
    display: 'flex',
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
    background: 'gray',
    borderRadius: '50px',
    fontSize: '56px', 
    color: 'black',
    marginRight: '20px'
  }
},
{
  name: 'ConsoleComponent'
}
)

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
        <div style={{fontSize: '36px'}}>
          List
        </div>
      </Paper>
    </div>
  )
}