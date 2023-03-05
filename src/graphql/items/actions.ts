import { gql } from 'graphql-request'

export const ItemFragment = gql`
  fragment ItemFragment on items  {
    available
    category_id
    choices
    description
    id
    images
    name
    price
    related_to
    restaurant_id
    variations
  }
`
export const GetItems = gql`
  ${ItemFragment}
  
  query GetItems($restaurant_id: uuid!) {
    items(where: {restaurant_id: {_eq: $restaurant_id}}) {
      ...ItemFragment
    }
  }
`

export const GetItem = gql`
  ${ItemFragment}
  
  query GetItem($id: uuid!) {
    items_by_pk(id: $id) {
      ...ItemFragment
    }
  }
`

export const CreateItem = gql`
  mutation CreateItem($available: Boolean!, $category_id: uuid!, $choices: jsonb!, $description: String, $images: jsonb!, $name: String!, $price: Int!, $related_to: jsonb!, $restaurant_id: uuid!, $variations: jsonb!) {
    insert_items_one(object: {available: $available, category_id: $category_id, choices: $choices, description: $description, images: $images, name: $name, price: $price, related_to: $related_to, restaurant_id: $restaurant_id, variations: $variations}) {
      id
    }
  }
`

export const UpdateItem = gql`
  mutation UpdateItem($id: uuid!, $available: Boolean!, $category_id: uuid!, $choices: jsonb!, $description: String, $images: jsonb!, $name: String!, $price: Int!, $related_to: jsonb!, $variations: jsonb!) {
    update_items_by_pk(pk_columns: {id: $id}, _set: {available: $available, category_id: $category_id, choices: $choices, description: $description, images: $images, name: $name, price: $price, related_to: $related_to, variations: $variations}) {
      id
    }
  }
`

export const DeleteItem = gql`
  mutation DeleteItem($id: uuid!) {
    delete_items_by_pk(id: $id) {
      id
    }
  }
`
