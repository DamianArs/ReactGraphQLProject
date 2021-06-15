import { AddCustomer } from './../graphql/mutations';
import { CustomersQuery } from './../graphql/queries';
import { client } from "../App"
import { DeleteCustomer } from '../graphql/mutations';

export const addStoreDispatch = () => async(dispatch: any) => {
    try{
    const response = await client.query({query:CustomersQuery,
    variables:{
      page: 1,
      perPage:10
    }
  })
    dispatch({
      type: 'getData',
      payload: response
    })
  }
  catch(error){
    console.log('error');
  }
  }

export const deleteCustomer = (id:string) => async(dispatch: any) => {
    try{
    const response = await client.mutate({mutation:DeleteCustomer,
    variables:{
      id
    }
  })
    console.log('MIDDLEDelete')
    dispatch({
      type: 'deleteCustomer',
      payload: response
    })
  
  }
  catch(error){
    console.log(error);
  }
  }

export const createCustomer = (id:string, name:string, country: string, email: string, phone: string) => async(dispatch: any) => {
    try{
    const response = await client.mutate({mutation:AddCustomer,
    variables:{
      id,
      name,
      country,
      email,
      phone
    }
  })
    dispatch({
      type: 'addCustomer',
      payload: response
    })
  }
  catch(error){
    console.log(error);
  }
  }