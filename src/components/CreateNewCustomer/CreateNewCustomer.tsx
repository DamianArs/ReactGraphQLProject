import { Box, Button, TextField } from '@material-ui/core'
import * as React from 'react'
import { Form } from 'react-final-form'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '20px'
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '80px',
    "& input":{
      width: '300px'
    }
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
  const classes = useStyles();
  const onSubmit = React.useCallback(()=>{
   
  },[])

  return(
    <div className={classes.root}>
          <Box className={classes.header}>
           <AddIcon style={{marginRight: '10px'}}/>
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
                        <TextField name='name' label='Name' variant="outlined"/>
                      </Box>
                      <Box>
                        <TextField  name='email' label='Email' variant="outlined" />
                      </Box>
                    </div>
                    <div className={classes.formRow}>
                      <Box mr='40px'>
                        <TextField  name='country' label='Country' variant="outlined"/>
                      </Box>
                      <Box>
                        <TextField  name='phone' label='Phone Number' variant="outlined" />
                      </Box>
                    </div>
                  </div>
                  <div style={{marginLeft: '50px', paddingBottom: '20px'}}>
                    <Button  variant='contained' color='primary'
                    style={{marginRight: '20px'}}  onClick={onSubmit}>Create</Button>
                    <Button color='primary'>Cancel</Button>
                  </div>
                </form>)
              }
          />
        </div>

  )
}