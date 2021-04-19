import { Customer } from './../Types/Types';

import  gql  from "graphql-tag";


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
export const OneCustomersQuery = gql`
query customer(
  $id: String!
){
  items: customer(
    id: $id
    ){
    id
    name
    country
    email
    phone
  }
}`

