import { Customer } from "../Types"

const getData = 'getData'
const deleteCustomer = 'deleteCustomer'
const addCustomer = 'addCustomer'

const initialState = {
  customers:[],
  total:0
}

export const reducer = (state=initialState, action:any) => {

  switch(action.type){
    case getData:
      return{
        customers: action.payload.data.items,
        total: action.payload.data.total.count
      }
    case  deleteCustomer: 
      return{
       customers: action.payload.data.deleteCustomer,
       total: action.payload.data.deleteCustomer.length
      }
    case addCustomer: 
    return{
      customers: action.payload.data.addCustomer,
       total: action.payload.data.addCustomer.length
    }
    
  }
  return state
}