import  gql  from "graphql-tag";


export const CUSTOMERS = gql`
query{
  customers{
    id
    name
    country
    email
    phone
  }
}`

