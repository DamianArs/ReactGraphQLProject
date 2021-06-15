import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useMutation } from "@apollo/react-hooks";
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
import EditIcon from '@material-ui/icons/Edit';
import ModalDialog from '../../common/ModalDialog/ModalDialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { DeleteCustomer } from '../../graphql/mutations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux';
import { addStoreDispatch, deleteCustomer } from '../../Store/middlewares';
import { store } from '../../Store';



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

interface InitialStates{
    customersReducer:{
      customers: Customer[]
      total: number
    }
  }


export const ListComponent:React.FC = () => {
  const[stateCustomers, setStateCustomers] = React.useState<Customer[]>([])
  const[oneCustomer, setOneCustomer] = React.useState<Customer[] | string>([])
  const[editCustomer, setEditCustomer] = React.useState<Customer>()
  const[total,setTotal] = React.useState(0)
  const[page, setPage] = React.useState(1);
  const[perPage, setPerPage] = React.useState(10)
  const[openModal, setOpenModal] = React.useState(false)
  

  const Customers = useSelector((state:InitialStates)=>({
    customers: state.customersReducer.customers,
    total: state.customersReducer.total
  }))
 
  
  const dispatch = useDispatch()

  const classes = useStyles();
  const history = useHistory()

  
  const onChangePage = React.useCallback((newValue: number) => setPage(newValue), [])
  const onChangePerPage = React.useCallback((newValue: number) => setPerPage(newValue), [])

  const handleOneCustomer = React.useCallback((value: Customer[] | string)=>{
    setOneCustomer(value)
  },[])

  const clearOneCustomer = React.useCallback(()=>{
    setOneCustomer([])
  },[])

  const handleOpenModal = React.useCallback(()=>{
    setOpenModal(true)
  },[])

  const handleClose = React.useCallback(()=>{
    setOpenModal(false)
  },[])

  const handleEditCustomer = React.useCallback((customer: Customer)=>{
    handleOpenModal()
    setEditCustomer(customer)
  },[])

  const handleDeleteCustomer = React.useCallback((id: string)=>{
    dispatch(deleteCustomer(id))
    toast.success('Customer deleted')
    },[])
 

  React.useEffect(()=>{
      setStateCustomers(Customers.customers)
      setTotal(Customers.total)
  },[Customers.customers])

 

  
  
  const handleRoute = (customer: Customer) => {
    history.push(`/List/${customer.id}?uuid=${customer.id}&name=${customer.name}&country=${customer.country}&email=${customer.email}&phone=${customer.phone}`)
  }
  if(stateCustomers){
    return(
      <div className={classes.root}>
        <SearchComponent handleOneCustomer={(value:any)=>handleOneCustomer(value)} clearOneCustomer={clearOneCustomer} stateCustomers={stateCustomers}/>
        <TableSummary length={total}/>
        <div style={{height: '2px', width:'100%'}}>
          {Customers.total === 0 && <LinearProgress style={{width: '100%', height: '2px'}}/>}
        </div>
        <TableContainer component={Paper} style={{borderRadius:'0 0 4px 4px'}}>
          <Table>
            <TableHead>
              <TableRow style={{borderRadius: '0'}}>
                <TableCell>UUID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(oneCustomer) && 
                oneCustomer.map((customer:Customer, index: number) => (
                  <TableRow key={customer.id} style={{background: index%2 ? 'white': '#f6f3f3'}}>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell>
                      <div className={classes.showDetails}>
                        <EditIcon onClick={()=>handleEditCustomer(customer)}/>
                        <SlideshowOutlinedIcon style={{margin: '0 15px'}} onClick={()=>handleRoute(customer)}/> 
                        {customer.name}
                      </div>
                      </TableCell>
                    <TableCell>{customer.country}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                  </TableRow>
                )) 
              }
              {oneCustomer==='none' && <div style={{padding: '16px'}}>No Results!</div>}
              {oneCustomer.length === 0 && 
                stateCustomers.map((customer:Customer, index:number) => (
                  <TableRow key={customer.id} style={{background: index%2 ? 'white': '#f6f3f3'}}>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell>
                      <div className={classes.showDetails}>
                        <EditIcon onClick={()=>handleEditCustomer(customer)}/>
                        <SlideshowOutlinedIcon style={{margin: '0 15px'}} onClick={()=>handleRoute(customer)}/> 
                        {customer.name}
                      </div>
                    </TableCell>
                    <TableCell>{customer.country}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell align='right'>
                      <Tooltip title='Delete' placement='top' >
                        <IconButton onClick={()=>handleDeleteCustomer(customer.id)}>
                          <MoreVertIcon/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ModalDialog open={openModal} handleClose={handleClose} customer={editCustomer}/>
        {oneCustomer.length === 0 &&
          <PaginationComponent
            page={page}
            perPage={perPage}
            total={total}
            onChangePage={onChangePage}
            onChangePerPage={onChangePerPage}
          />
        }
      </div>
    )
  }
  return <h1>Loding...</h1>
  
}

