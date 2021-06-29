const customers = require('./customers')()
const nodes = require('./nodes')()
const _ = require('lodash')


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

  };

}

class NodesController {
  constructor() {
    this.nodesList = nodes.nodes
  }
  getNodesList(options) {
    let { page, perPage } = options;

    if (typeof page !== undefined && typeof perPage !== undefined) {

      return _(this.nodesList)
        .value();
    }
    return this.nodesList

  };
}

module.exports.CustomerController = CustomerController;
module.exports.NodesController = NodesController
