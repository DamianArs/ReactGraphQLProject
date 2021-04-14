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
}
}
