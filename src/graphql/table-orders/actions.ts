import { OrderFragment } from '@/graphql/orders/actions'
import { TableFragment } from '@/graphql/tables/actions'
import { gql } from 'graphql-request'

export const TableOrderFragment = gql`
  fragment TableOrderFragment on table_orders {
    id
    created_at
    status
    table_id
  }
`

export const GetTableOrders = gql`
  ${TableOrderFragment}
  
  query GetTableOrders($restaurant_id: uuid!) {
    table_orders(where: {table: {restaurant_id: {_eq: $restaurant_id}}}) {
      ...TableOrderFragment
    }
  }
`

export const GetTableOrder = gql`
  ${OrderFragment}
  ${TableFragment}
  
  query GetTableOrder($id: uuid!) {
    table_orders_by_pk(id: $id) {
      ...TableOrderFragment
      table {
        ...TableFragment
      }
      orders {
        ...OrderFragment
      }
    }
  }
`
export const CreateTableOrder = gql`
  mutation CreateTableOrder($status: String!, $table_id: uuid!) {
    insert_table_orders_one(object: {status: $status, table_id: $table_id}) {
      id
      status
      table_id
    }
  }
`
