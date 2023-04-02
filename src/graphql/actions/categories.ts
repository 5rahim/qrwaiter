import { ItemFragment } from '@/graphql/actions/items'
import { gql } from 'graphql-request'

export const GetCategories = gql`
  query GetCategories($restaurant_id: uuid!) {
    categories(where: {restaurant_id: {_eq: $restaurant_id}}) {
      id
      name
      restaurant_id
      order
    }
  }
`

export const SubscribeCategories = gql`
  subscription SubscribeCategories($restaurant_id: uuid!) {
    categories(where: {restaurant_id: {_eq: $restaurant_id}}) {
      id
      name
      restaurant_id
      order
    }
  }
`

export const GetHomePageCategories = gql`
  ${ItemFragment}

  query GetHomePageCategories($restaurant_id: uuid!) {
    categories(where: {restaurant_id: {_eq: $restaurant_id}}) {
      id
      name
      restaurant_id
      items(where: {available: {_eq: true}}) {
        ...ItemFragment
      }
    }
  }
`

export const GetCategory = gql`
  query GetCategory($id: uuid!) {
    categories_by_pk(id: $id) {
      id
      name
      restaurant_id
    }
  }
`

export const CreateCategory = gql`
  mutation CreateCategory($name: String!, $restaurant_id: uuid!, $order: Int!) {
    insert_categories_one(object: {name: $name, restaurant_id: $restaurant_id, order: $order}) {
      id
    }
  }
`

export const UpdateCategory = gql`
  mutation UpdateCategory($id: uuid!, $name: String!) {
    update_categories_by_pk(pk_columns: {id: $id}, _set: { name: $name }) {
      id
      name
      restaurant_id
      order
    }
  }
`

export const UpdateCategoryOrder = gql`
  mutation UpdateCategoryOrder($order: [categories_updates!]!) {
    update_categories_many(updates: $order) {
      affected_rows
    }
  }
`


export const DeleteCategory = gql`
  mutation DeleteCategory($id: uuid!) {
    delete_categories_by_pk(id: $id) {
      id
    }
    update_items(where: {category_id: {_eq: $id}}, _set: {category_id: null}) {
      affected_rows
    }
  }
`
