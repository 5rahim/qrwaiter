import { OrderFragment } from '@/graphql/actions/orders'
import { TableOrderFragment } from '@/graphql/actions/table-orders'
import { gql } from 'graphql-request'

export const TableFragment = gql`
  fragment TableFragment on tables {
    id
    no_of_chairs
    restaurant_id
    name
    order
  }
`

export const GetTables = gql`
  ${TableFragment}

  query GetTables($restaurant_id: uuid!) {
    tables(order_by: {order: asc}, where: {restaurant_id: {_eq: $restaurant_id}}) {
      ...TableFragment
    }
  }
`
export const GetTableInfo = gql`
  ${TableFragment}
  
  query GetTableInfo($id: uuid!) {
    tables_by_pk(id: $id) {
      ...TableFragment
    }
  }
`
export const GetTable = gql`
  ${OrderFragment}
  ${TableFragment}
  ${TableOrderFragment}
  
  query GetTable($id: uuid!) {
    tables_by_pk(id: $id) {
      ...TableFragment
      table_orders {
        ...TableOrderFragment
        orders {
          ...OrderFragment
        }
      }
    }
  }
`

export const SubscribeTables = gql`
  ${TableFragment}

  subscription SubscribeTables($restaurant_id: uuid!) {
    tables(order_by: {order: asc}, where: {restaurant_id: {_eq: $restaurant_id}}) {
      ...TableFragment
    }
  }
`

export const CreateTable = gql`
  mutation CreateTable($no_of_chairs: Int!, $qr_codes: jsonb, $restaurant_id: uuid!, $name: String!, $order: Int) {
    insert_tables_one(object: {no_of_chairs: $no_of_chairs, qr_codes: $qr_codes, restaurant_id: $restaurant_id, name: $name, order: $order}) {
      id
    }
  }
`


export const UpdateTable = gql`
  mutation UpdateTable($id: uuid!, $no_of_chairs: Int!, $name: String!, $qr_codes: jsonb, $order: Int) {
    update_tables_by_pk(pk_columns: {id: $id}, _set: {no_of_chairs: $no_of_chairs, name: $name, qr_codes: $qr_codes, order: $order}) {
      id
    }
  }
`


export const UpdateTableOrder = gql`
  mutation UpdateTableOrder($order: [tables_updates!]!) {
    update_tables_many(updates: $order) {
      affected_rows
    }
  }
`

export const DeleteTable = gql`
  mutation DeleteTable($id: uuid!) {
    delete_tables_by_pk(id: $id) {
      id
    }
#    delete_table_orders_by_pk(pk_columns: {id: $id}) {
#      affected_rows
#    }
  }
`
