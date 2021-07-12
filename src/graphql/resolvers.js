const { CustomerController, NodesController } = require('./schemaController')
const _ = require('lodash')


const customers = new CustomerController()
const nodes = new NodesController()

module.exports = {
  Query: {
    customers: (_, { page, perPage }) => {

      const list =  customers.getCustomersList({
        page,
        perPage
      })
      return {
        list,
        total: list.length
      }

    },
    nodes: (_, { page, perPage }) => {
      return nodes.getNodesList({
        page,
        perPage
      })

    },
    oneNode: (_, {  parent }) => {
      
     
      const search = (tree, parrent) => {
          let result = null
                if (parrent === tree.name) {
                    return tree
                } else {
                    if(tree.nodes){
                        tree.nodes.some(node => result = search(node, parrent));
                    }
                    return result;
                }
        }
      
      const oneNode = search(nodes, parent)
      console.log('ONENODE', oneNode);
       return oneNode
    }
    // _nodesMeta: (_, { page, perPage }) => {
    //   const data = nodes.getNodesList({
    //     page,
    //     perPage
    //   });
    //   return {
    //     count: data.length
    //   }
    // },

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
