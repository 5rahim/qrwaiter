import { ItemFragment } from '@/graphql/items/actions'
import { gql } from 'graphql-request'

export const GetCategories = gql`
  query GetCategories($restaurant_id: uuid!) {
    categories(where: {restaurant_id: {_eq: $restaurant_id}}) {
      id
      name
      restaurant_id
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
  mutation CreateCategory($name: String!, $restaurant_id: uuid!) {
    insert_categories_one(object: {name: $name, restaurant_id: $restaurant_id}) {
      id
    }
  }
`

export const UpdateCategory = gql`
  mutation UpdateCategory($id: uuid!, $name: String!) {
    update_categories_by_pk(pk_columns: {id: $id}, _set: { name: $name }) {
      id
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
