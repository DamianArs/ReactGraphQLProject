import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { CustomersQuery } from '../../graphql/queries';
import {  useQuery } from "@apollo/react-hooks";
import { Customer } from '../../Types';


const useStyles = makeStyles({
  root:{},
  ul: {
    padding: '30px',
    marginLeft: '40px'
  },
  li:{
    marginBottom: '20px'
  }
},
{
  name: 'ListComponent'
}
)
export const CustomerList:React.FC = () => {
  const[stateCustomers, setStateCustomers] = React.useState([])
  const[page, setPage] = React.useState(1);
  const[perPage, setPerPage] = React.useState(10)



  const classes = useStyles();
  const history = useHistory()

  const{data, loading,refetch} = useQuery(CustomersQuery,{
    variables:{
      page,
      perPage
    }
  })
  
  React.useEffect(()=>{
    refetch()
    if(data){
      setStateCustomers(data.items)
    }
  },[data,refetch])

  if(stateCustomers){
    return(
      <ul className={classes.ul}>
        {stateCustomers.map((oneCustomer:Customer) => (
          <li key={oneCustomer.id} className={classes.li}>{oneCustomer.name}</li>
        ))}
      </ul>
    )
    
  }
  return <h1>Loding...</h1>
  
}