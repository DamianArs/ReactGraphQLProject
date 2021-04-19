import * as React from 'react'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { InputAdornment } from '@material-ui/core';
import { useLazyQuery } from '@apollo/react-hooks';
import { OneCustomersQuery } from '../../graphql/queries';
import { Customer } from '../../Types';

const useStyles = makeStyles({
  root:{},
  form:{
    display: 'flex',
  
  },
  button: {
    width: '160px',
    marginRight: '50px'
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

interface SearchProps{
  id: string,
 
}

interface SearchComponentProps{
  handleOneCustomer: (value:Customer) => void
  clearOneCustomer: () => void
}

export const SearchComponent: React.FC<SearchComponentProps> = ({handleOneCustomer, clearOneCustomer}) => {
  const[fetchCustomer, fetchCustomerProps] = useLazyQuery(OneCustomersQuery)
  const classes = useStyles();
  const onSubmit = React.useCallback((values:SearchProps) => {
   fetchCustomer({
     variables:{
       id: values.id
     }
   })
  },[])

  React.useEffect(()=>{
    if(fetchCustomerProps.data)
    handleOneCustomer(fetchCustomerProps.data.items)
    
  },[fetchCustomerProps])

  
  return(
    <Form
      initialValues={{
        id : ""
      }}
      onSubmit={onSubmit}
      render={({ form,handleSubmit, values }) => (
        <div className={classes.root}>
          <Paper style={{padding: '20px', marginBottom: '60px'}}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Field name="id" render={({ input }) => (
              <TextField 
                label="Please add UUID"
                variant="outlined"
                size='small'
                className={classes.field}
                {...input}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {values.id && 
                        <ClearIcon style={{cursor: 'pointer'}} onClick={()=>{form.reset()}}/>
                      }
                    </InputAdornment>
                  ),
                }}
              />
              )} />
              <Button disabled={!values.id} className={classes.button} variant='contained' color="primary" type='submit'>Search</Button>
              <Button variant="outlined" onClick={clearOneCustomer}>Clear Search</Button>
            </form>
          </Paper>
        </div>
    )}
  />
  )
}