import gql from 'graphql-tag'

export const EditCustomer = gql`
  mutation EditCustomer (
    $id: String!
    $name: String!
    $country: String!
    $email: String!
    $phone: String!
  ) {
    editCustomer: EditCustomer(id: $id, name: $name, country: $country, email: $email, phone: $phone) {
      id
      name
      country
      email
      phone
    }
  }
`
export const AddCustomer = gql`
  mutation AddCustomer (
    $id: String!
    $name: String!
    $country: String!
    $email: String!
    $phone: String!
  ) {
    addCustomer: AddCustomer(id: $id, name: $name, country: $country, email: $email, phone: $phone) {
      id
      name
      country
      email
      phone
    }
  }
`
export const DeleteCustomer = gql`
  mutation DeleteCustomer (
    $id: String!
  ) {
    deleteCustomer: DeleteCustomer(id: $id ) {
      id
      name
      country
      email
      phone
    }
  }
`