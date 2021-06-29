import gql from "graphql-tag";


export const CustomersQuery = gql`
query customers(
  $page: Int
  $perPage: Int
){
  items: customers(
    page: $page
    perPage: $perPage
    ){
    id
    name
    country
    email
    phone
  }
  total: _customersMeta(
    page: $page
    perPage: $perPage
  ) {
    count
  }
}`

export const NodesQuery = gql`
  query nodes(
    $page: Int
    $perPage: Int
  ){
    items: nodes(
      page: $page
      perPage: $perPage
    ){
      name
      nodes
    }
  }
`

