import { gql } from 'graphql-request'

export const CreateRestaurant = gql`
  mutation CreateRestaurant($slug: String!, $name: String!, $owner_id: uuid!, $description: String, $customization: jsonb!) {
    insert_restaurants_one(object: {slug: $slug, owner_id: $owner_id, description: $description, customization: $customization, name: $name}) {
      id
      slug
    }
  }
`

export const GetRestaurantBySlug = gql`
  query GetRestaurantBySlug($slug: String!) {
    restaurants(where: {slug: {_eq: $slug}}) {
      id
      description
      customization
      name
      owner_id
      slug
    }
  }
`

export const UpdateRestaurantTheme = gql`
  mutation UpdateRestaurantTheme($id: uuid!, $customization: jsonb!) {
    update_restaurants_by_pk(pk_columns: {id: $id}, _set: {customization: $customization}) {
      customization
    }
  }
`
export const UpdateRestaurantDetails = gql`
  mutation UpdateRestaurantDetails($id: uuid!, $name: String!, $description: String) {
    update_restaurants_by_pk(pk_columns: {id: $id}, _set: {name: $name, description: $description}) {
      customization
    }
  }
`

