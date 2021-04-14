import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { CustomersQuery } from '../../graphql/queries';
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Customer } from '../../Types';
import { TableSummary } from './TableSummary';
import SlideshowOutlinedIcon from '@material-ui/icons/SlideshowOutlined';
import { PaginationComponent } from '../../common';
import { SearchComponent } from '../../common/SearchComponent';


const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
    padding: '30px'
  },
  
  line:{
    margin: '0 30px 40px 30px',
    height: '1px', 
    background: 'gray'
  },
  showDetails:{
    display: 'flex',
    alignItems: 'center',
  }
},
{
  name: 'ListComponent'
}
)
export const ListComponent:React.FC = () => {
  const[stateCustomers, setStateCustomers] = React.useState([])
  const[total,setTotal] = React.useState(0)
  const[page, setPage] = React.useState(1);
  const[perPage, setPerPage] = React.useState(10)


  const classes = useStyles();
  const history = useHistory()

  const{data} = useQuery(CustomersQuery,{
    variables:{
      page,
      perPage
    }
  })
  
  const onChangePage = React.useCallback((newValue: number) => setPage(newValue), [])
  const onChangePerPage = React.useCallback((newValue: number) => setPerPage(newValue), [])

  React.useEffect(()=>{
    if(data){
      setStateCustomers(data.items)
      setTotal(data.total.count)
    }
  },[data])

  
  const handleRoute = (customer: Customer) => {
    history.push(`/List/${customer.id}?uuid=${customer.id}&name=${customer.name}&country=${customer.country}&email=${customer.email}&phone=${customer.phone}`)
    
    

  }
  if(stateCustomers){
    return(
      <div className={classes.root}>
        <SearchComponent/>
        <TableSummary length={total}/>
        <TableContainer component={Paper} style={{borderRadius:'0 0 4px 4px'}}>
          <Table>
            <TableHead>
              <TableRow style={{borderRadius: '0'}}>
                <TableCell>UUID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateCustomers.map((customer:Customer, index:number) => (
                <TableRow key={customer.id} style={{background: index%2 ? 'white': '#f6f3f3'}}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell className={classes.showDetails}><SlideshowOutlinedIcon style={{marginRight: '5px'}} onClick={()=>handleRoute(customer)}/> {customer.name}</TableCell>
                  <TableCell>{customer.country}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationComponent
          page={page}
          perPage={perPage}
          total={total}
          onChangePage={onChangePage}
          onChangePerPage={onChangePerPage}
        />
      </div>
    )
    
  }
  return <h1>Loding...</h1>
  
}