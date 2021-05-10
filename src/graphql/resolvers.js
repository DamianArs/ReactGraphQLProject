const { CustomerController } = require('./schemaController')
const _= require('lodash')
// import data from '../../db.json'

const customers = new CustomerController()

module.exports = {
 Query:{
  customers: (_, {page,perPage}) => {
    
    return customers.getCustomersList({
      page,
      perPage
    })

  },
  _customersMeta: (_,{page,perPage}) => {
    const data = customers.getCustomersList({
      page,
      perPage
    });
      return {
        count: data.length
      }
  } ,
  customer: (_,{id}) => customers.findCustomerById(id)
},
  Mutation:{
    EditCustomer: (_,{ id, name, country, email, phone}) =>{
      const newCustomer = {
        id,
        name,
        country,
        email,
        phone
      }
     customers.customersList = customers.customersList.map(customer=>{
       if(customer.id === id){
         customer = Object.assign({}, newCustomer)
         return customer
       }
       return customer
     })
     return customers.customersList
    }
  }
}
