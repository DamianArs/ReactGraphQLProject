const customers = require('./customers')()
const _= require('lodash')


class CustomerController {
  constructor() {
    this.customersList = customers.persons;
  }

  getCustomersList(options) {
    let { page, perPage } = options;

    if (typeof page !== undefined && typeof perPage !== undefined) {
     
      return _(this.customersList)
        .value();
    }
    return this.customersList
   
  }
}

module.exports.CustomerController = CustomerController;
