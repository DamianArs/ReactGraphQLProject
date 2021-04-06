import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  rounded:{
    borderRadius: '4px 4px 0 0 ',
    padding: '16px'
  },
},
{
  name: 'TableSummary'
}
)

interface TableSummaryProps{
  length: number
}

export const TableSummary:React.FC<TableSummaryProps> = ({length}) => {
  const classes = useStyles();
  return(
      <Paper className={classes.rounded}>
        <Box fontSize={16}>All Customers</Box>
        <Box fontSize={14} style={{color:'gray'}}>Results: {length} </Box>
      </Paper>
  )
}