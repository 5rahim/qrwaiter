import { OrderFragment } from '@/graphql/actions/orders'
import { TableFragment } from '@/graphql/actions/tables'
import { gql } from 'graphql-request'

export const TableOrderFragment = gql`
  fragment TableOrderFragment on table_orders {
    id
    created_at
    status
    tokens
    order_number
    table_id
    table {
      name
    }
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
  
  subscription SubscribeTableOrder($id: uuid!) {
    table_orders_by_pk(id: $id) {
      id
      created_at
      status
      tokens
      order_number
      table_id
      table {
        id
        no_of_chairs
        restaurant_id
        name
        order
      }
      orders {
        chair_number
        created_at
        id
        items
        subtotal
        table_order_id
        total
        total_tax
      }
    }
  }
`

export const CreateTableOrder = gql`
  mutation CreateTableOrder($status: String!, $table_id: uuid!, $tokens: jsonb!, $order_number: String!) {
    insert_table_orders_one(object: {status: $status, table_id: $table_id, tokens: $tokens, order_number: $order_number}) {
      id
      created_at
      status
      tokens
      table_id
      order_number
    }
  }
`
export const UpdateCurrentTableOrder = gql`
  mutation UpdateCurrentTableOrder($id: uuid!, $set: table_orders_set_input) {
    update_table_orders_by_pk(pk_columns: {id: $id}, _set: $set) {
      id
      created_at
      status
      tokens
      table_id
      order_number
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
      order_number
      table_id
      table {
        id
        no_of_chairs
        restaurant_id
        name
        order
      }
      orders {
        chair_number
        created_at
        id
        items
        subtotal
        table_order_id
        total
        total_tax
      }
    }
  }
`
