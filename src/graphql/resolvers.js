const { CustomerController, NodesController } = require('./schemaController')
const _ = require('lodash')


const customers = new CustomerController()
const nodes = new NodesController()

module.exports = {
  Query: {
    customers: (_, { page, perPage }) => {

      return customers.getCustomersList({
        page,
        perPage
      })

    },
    _customersMeta: (_, { page, perPage }) => {
      const data = customers.getCustomersList({
        page,
        perPage
      });
      return {
        count: data.length
      }
    },
    nodes: (_, { page, perPage }) => {
      return nodes.getNodesList({
        page,
        perPage
      })

    },
    _nodesMeta: (_, { page, perPage }) => {
      const data = nodes.nodesList({
        page,
        perPage
      });
      return {
        count: data.length
      }
    },

  },
  Mutation: {
    EditCustomer: (_, { id, name, country, email, phone }) => {
      const newCustomer = {
        id,
        name,
        country,
        email,
        phone
      }
      customers.customersList = customers.customersList.map(customer => {
        if (customer.id === id) {
          customer = Object.assign({}, newCustomer)
          return customer
        }
        return customer
      })
      return customers.customersList
    },
    AddCustomer: (_, { id, name, country, email, phone }) => {
      const newCustomer = {
        id,
        name,
        country,
        email,
        phone
      }
      customers.customersList.push(newCustomer)
      return customers.customersList
    },
    DeleteCustomer: (_, { id }) => {
      customers.customersList = customers.customersList.filter(customer => customer.id !== id)
      return customers.customersList
    }
  }
}
