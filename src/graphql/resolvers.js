const data = require('./customers')()
// import data from '../../db.json'

module.exports = {
 Query:{
  customers: () => data.persons,
 },

}