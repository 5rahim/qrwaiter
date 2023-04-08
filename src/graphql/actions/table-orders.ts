import { OrderFragment } from '@/graphql/actions/orders'
import { TableFragment } from '@/graphql/actions/tables'
import { gql } from 'graphql-request'

export const TableOrderFragment = gql`
  fragment TableOrderFragment on table_orders {
    id
    created_at
    status
    tokens
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
  ${TableFragment}
  ${TableOrderFragment}
  ${OrderFragment}

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
export const SubscribeTableOrder = gql`
  ${TableFragment}
  ${TableOrderFragment}
  ${OrderFragment}
  
  subscription SubscribeTableOrder($id: uuid!) {
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
  mutation CreateTableOrder($status: String!, $table_id: uuid!, $tokens: jsonb!) {
    insert_table_orders_one(object: {status: $status, table_id: $table_id, tokens: $tokens}) {
      id
      status
      tokens
      table_id
    }
  }
`

export const GetLatestTableOrderByTableId = gql`
  query GetLatestTableOrderByTableId($table_id: uuid!) {
    table_orders(limit: 1, order_by: {created_at: desc}, where: {table_id: {_eq: $table_id}}) {
      id
      created_at
      status
      tokens
      table_id
      table {
        no_of_chairs
        name
      }
    }
  }
`
