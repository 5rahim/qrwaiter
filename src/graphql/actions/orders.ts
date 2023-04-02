import { TableOrderFragment } from '@/graphql/actions/table-orders'
import gql from 'graphql-tag'

export const OrderFragment = gql`
  fragment OrderFragment on orders {
    chair_number
    created_at
    id
    items
    subtotal
    table_order_id
    total
    total_tax
  }
`

export const GetOrder = gql`
  ${OrderFragment}
  ${TableOrderFragment}
  
  query GetOrder($id: uuid!) {
    orders_by_pk(id: $id) {
      ...OrderFragment
      table_order {
        ...TableOrderFragment
      }
    }
  }
`

export const CreateOrders = gql`
  mutation CreateOrders($chair_number: Int!, $items: jsonb!, $subtotal: Int!, $total: Int!, $total_tax: Int!, $table_order_id: uuid!) {
    insert_orders(objects: {chair_number: $chair_number, items: $items, subtotal: $subtotal, total: $total, total_tax: $total_tax, table_order_id: $table_order_id}) {
      affected_rows
      returning {
        ...OrderFragment
      }
    }
  }
`
