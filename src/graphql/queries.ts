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
      list {
        id
        name
        country
        email
        phone
      }
    total
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
      nodes{
        name
      }
    }
    total : _nodesMeta(
      page: $page
      perPage: $perPage
    ){
      count
    }
  }
`
export const OneNodeQuery = gql`
  query oneNode(
   
    $parent: String
  ){
    items: oneNode(
      parent: $parent
    ){
      name
      nodes{
        name
        nodes{
          name
        }
      }
    }
  }
`

