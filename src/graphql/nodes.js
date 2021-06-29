const faker = require('faker')


module.exports = function () {
  const nodes = {
    nodes: [
      {
        name: 'First',
        nodes: [
         'FirstOne',
         'FirstTwo',
         'FirstThree'
        ]
      },
      {
        name: 'Second'

      },
      {
        name: 'Third',
      },
      {
        name: 'Fourth',
        nodes: [
          'FourthOne',
          'FourthTwo',
          'FourthThree',
          'FourthFour'
         ]
      }
     

    ],
    pagination:
    {
      page: 0,
      perPage: 5
    }
  }
  return nodes
}