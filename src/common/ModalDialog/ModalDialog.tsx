import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import { Form} from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import { Customer } from '../../Types';
import { Box, Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks'
import { EditCustomer } from '../../graphql/mutations';



const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
    width: '700px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px'
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '80px'
  },
  formRow: {
    display: 'flex',
    marginTop: '40px'
  }, 
},
{
  name: 'ModalDialog'
});

export interface ModalDialogProps {
  open: boolean;
  handleClose: () => void
  customer?: Customer
}

 const  ModalDialog: React.FC<ModalDialogProps> = (props) => {
  const[stateCustomer, setStateCustomer] = useState<Customer>({
    id: "",
    name: "",
    country: "",
    phone: "",
    email: ""
  })
  const classes = useStyles();
  const { handleClose, open, customer } = props;
  const[fetch, fetchProps] = useMutation(EditCustomer)

  

  const onSubmit = useCallback(()=>{
    if(customer){
    fetch({
      variables: {
        id: customer.id,
        name: stateCustomer.name,
        country: stateCustomer.country,
        phone: stateCustomer.phone,
        email: stateCustomer.email
      }
    })
    handleClose()
  }
    
  },[stateCustomer])

  const handleCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateCustomer({
     ...stateCustomer,
     [e.currentTarget.name] : e.currentTarget.value
    })
  }

  useEffect(()=>{
    if(customer){
      setStateCustomer(customer)
    }
  },[customer])

  return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth={false}>
        <div className={classes.root}>
          <Box className={classes.header}>
            <EditIcon style={{marginRight: '10px'}}/>
            Edit
          </Box>
          <div style={{height: '1px', backgroundColor: 'black', width: '100%', marginBottom:'10px'}}/>
          <Form
              initialValues={customer}
              onSubmit={onSubmit}
              render={({ handleSubmit, form, values, }) => {
                return(
                <form onSubmit={handleSubmit}>
                  <div className={classes.form}>
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                        <TextField value={stateCustomer?.name}  name='name' label='Name' variant="outlined" onChange={handleCustomer} />
                      </Box>
                      <Box>
                        <TextField value={stateCustomer?.email} name='email' label='Email' variant="outlined" onChange={handleCustomer} />
                      </Box>
                    </div>
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                        <TextField value={stateCustomer?.country} name='country' label='Country' variant="outlined" onChange={handleCustomer} />
                      </Box>
                      <Box>
                        <TextField value={stateCustomer?.phone} name='phone' label='Phone Number' variant="outlined" onChange={handleCustomer} />
                      </Box>
                    </div>
                  </div>
                  <div style={{marginLeft: '50px', paddingBottom: '20px'}}>
                    <Button  variant='contained' color='primary'
                    disabled={stateCustomer.name === values.name && stateCustomer.country === values.country && stateCustomer.phone === values.phone && stateCustomer.email === values.email  ? true : false} 
                    style={{marginRight: '20px'}}  onClick={onSubmit}>Edit</Button>
                    <Button color='primary' onClick={handleClose}>Cancel</Button>
                  </div>
                </form>)}
              }
          />
        </div>
      </Dialog>
  );
}

export default React.memo(ModalDialog)
