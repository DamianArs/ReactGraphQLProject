import { Box, Button, TextField } from '@material-ui/core'
import * as React from 'react'
import { Form } from 'react-final-form'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from "react-final-form"
import { Customer } from '../../Types';
import { useMutation } from '@apollo/react-hooks'
import { AddCustomer } from '../../graphql/mutations';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { createCustomer } from '../../Store/middlewares';
const { v4 } = require('uuid')

const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '20px',
    marginLeft: '20px',
    marginTop: '40px'
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '80px',
    "& input":{
      width: '300px'
    },
    marginLeft: '20PX'
  },
  formRow: {
    display: 'flex',
    marginTop: '40px'
  }, 
},
{
  name: 'ModalDialog'
});

export const CreateNewCustomer: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles();
  const onSubmit = React.useCallback((values:Customer)=>{
    const{ name, phone, country, email } = values
    const id = v4()
    dispatch(createCustomer(id,name, phone, email, country))
    history.push('/List')
    toast.success('Create successfully completed!')
  },[])
  
  
  return(
    <div className={classes.root}>
          <Box className={classes.header}>
           <AddIcon style={{marginRight: '10px', alignSelf:'center'}}/>
            Create
          </Box>
          <div style={{height: '1px', backgroundColor: 'black', width: '100%', marginBottom:'40px'}}/>
          <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, form, values, }) => (
                <form onSubmit={handleSubmit}>
                  <div className={classes.form} >
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                      <Field name="name">
                      {({ input }) => (
                        <TextField 
                          label='Name' 
                          variant="outlined"
                          {...input}
                          
                        />
                      )}
                      </Field>
                      </Box>
                      <Box>
                      <Field name="email">
                      {({ input }) => (
                        <TextField 
                          label='Email' 
                          variant="outlined"
                          {...input}
                          
                          />
                        )}
                      </Field>
                      </Box>
                    </div>
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                      <Field name="country" >
                      {({ input }) => (
                        <TextField  
                          label='Country' 
                          variant="outlined"
                          {...input}
                          
                          />
                      )}
                      </Field>
                      </Box>
                      <Box>
                      <Field name="phone" >
                      {({ input }) => (
                        <TextField 
                          label='Phone Number' 
                          variant="outlined"
                           {...input}
                         
                          />
                        )}
                        </Field>
                      </Box>
                    </div>
                  </div>
                  <div style={{marginLeft: '50px', paddingBottom: '20px'}}>
                    <Button  
                      variant='contained' color='primary'
                      style={{marginRight: '20px'}}  
                      type='submit'
                      disabled={!values.name || !values.country || !values.phone || !values.email}
                      >
                        Create
                        </Button>
                    <Button color='primary'>Cancel</Button>
                  </div>
                </form>)
              }
          />
        </div>

  )
}