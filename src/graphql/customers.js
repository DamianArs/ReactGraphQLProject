const faker = require('faker')
const { v4 } = require('uuid')

module.exports = function () {
  const customers = {
  persons: [
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
     
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
      
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      id: v4(),
      name: faker.name.findName(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    
  ],
  pagination: 
    {
      page: 0,
      perPage: 5
    }
}
return customers
}