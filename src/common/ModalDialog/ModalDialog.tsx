import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import { Form } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import { Customer } from '../../Types';
import { Box, Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks'
import { EditCustomer } from '../../graphql/mutations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Field } from "react-final-form"
import { useDispatch } from 'react-redux';
import { editCustomer } from '../../Store/middlewares';



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
  const classes = useStyles();
  const dispatch = useDispatch()
  const { handleClose, open, customer } = props;

  const onSubmit = useCallback((values)=>{
    const{ name, country, phone, email } = values
    
    if(customer){
      const id = customer?.id
      dispatch(editCustomer(id, name, country, phone, email))
      toast.success('Edit successfully completed!')
      handleClose()
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
              render={({ handleSubmit, pristine, values, }) => {
                return(
                <form onSubmit={handleSubmit}>
                  <div className={classes.form}>
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                      <Field name="name" allowNull parse={(value) => value}>
                        {({ input }) => (
                        <TextField
                        label='Name' 
                        variant="outlined" 
                        {...input}
                        InputLabelProps={{
                            shrink: true,
                          }}
                         />
                          )}
                        </Field>
                      </Box>
                      <Box>
                      <Field name="email" allowNull parse={(value) => value}>
                        {({ input }) => (
                        <TextField
                          label='Email' 
                          variant="outlined" 
                          {...input}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                         )}
                        </Field>
                      </Box>
                    </div>
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                        <Field name='country' allowNull parse={(value) => value}>
                        {({ input }) => (
                        <TextField 
                          label='Country' 
                          variant="outlined" 
                          {...input}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                         )}
                        </Field>
                      </Box>
                      <Box>
                        <Field name='phone' allowNull parse={(value) => value}>
                        {({ input }) => (
                        <TextField 
                          label='Phone Number'
                          variant="outlined" 
                           {...input}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                           )}
                        </Field>
                      </Box>
                    </div>
                  </div>
                  <div style={{marginLeft: '50px', paddingBottom: '20px'}}>
                    <Button  variant='contained' color='primary'
                      disabled={pristine} 
                      style={{marginRight: '20px'}} 
                      type='submit' 
                      >
                      Edit
                    </Button>
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
