import * as React from 'react'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root:{},
  form:{
    display: 'flex',
  
  },
  button: {
    width: '160px'
  },
  field:{
    width: '400px',
    marginRight: '60px'
  }
},
{
  name: 'SearchComponent'
}
)
export const SearchComponent = () => {
  const classes = useStyles();
  return(
    <Form
      onSubmit={()=>{}}
      render={({ handleSubmit }) => (
        <div className={classes.root}>
          <Paper style={{padding: '20px', marginBottom: '60px'}}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <div>
              <TextField
                label="Please add UUID"
                variant="outlined"
                size='small'
                className={classes.field}
              />
              </div>
              <Button className={classes.button} variant='contained' color="primary">Search</Button>
            </form>
          </Paper>
        </div>
    )}
  />
  )
}