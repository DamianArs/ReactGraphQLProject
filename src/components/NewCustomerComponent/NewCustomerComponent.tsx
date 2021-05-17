import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CreateNewCustomer } from '../CreateNewCustomer';
import { CustomerList } from '../CustomerList';
import { Paper } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}


const useStyles = makeStyles({
  root: {
    margin: '0 32px'
  },
});

export const  NewCustomerComponent: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          style={{padding: '20px'}}
        >
          <Tab label="Create Customer" />
          <Tab label="List"  />
        </Tabs>  
        {value===0 && <CreateNewCustomer/>}
        {value===1 && <CustomerList/>}
    </Paper>
  );
}