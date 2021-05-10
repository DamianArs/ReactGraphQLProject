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