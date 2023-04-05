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
    allergens
    restaurant_id
    variations
    created_at
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
export const SubscribeItems = gql`
  ${ItemFragment}

  subscription SubscribeItems($restaurant_id: uuid!) {
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
  mutation CreateItem($available: Boolean!, $category_id: uuid!, $choices: jsonb!, $description: String, $images: jsonb!, $name: String!, $price: Int!, $allergens: jsonb!, $restaurant_id: uuid!, $variations: jsonb!) {
    insert_items_one(object: {available: $available, category_id: $category_id, choices: $choices, description: $description, images: $images, name: $name, price: $price, allergens: $allergens, restaurant_id: $restaurant_id, variations: $variations}) {
      ...ItemFragment
    }
  }
`

export const UpdateItem = gql`
  mutation UpdateItem($id: uuid!, $available: Boolean!, $category_id: uuid!, $choices: jsonb!, $description: String, $images: jsonb!, $name: String!, $price: Int!, $allergens: jsonb!, $variations: jsonb!) {
    update_items_by_pk(pk_columns: {id: $id}, _set: {available: $available, category_id: $category_id, choices: $choices, description: $description, images: $images, name: $name, price: $price, allergens: $allergens, variations: $variations}) {
      ...ItemFragment
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
