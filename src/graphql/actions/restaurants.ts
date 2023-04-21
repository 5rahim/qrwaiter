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
export const GetRestaurantByOwnerId = gql`
  query GetRestaurantByOwnerId($owner_id: uuid!) {
    restaurants(where: {owner_id: {_eq: $owner_id}}) {
      id
      description
      customization
      name
      owner_id
      slug
    }
  }
`
export const GetRestaurantByAdministratorId = gql`
  query GetRestaurantByAdministratorId($user_id: uuid!) {
    restaurant_administrators(where: { user_id: {_eq: $user_id}}) {
      id
      user_id
      restaurant_id
      restaurant {
        id
        description
        customization
        name
        owner_id
        slug
      }
    }
  }
`
export const AddRestaurantAdministrator = gql`
  mutation AddRestaurantAdministrator($restaurant_id: uuid!, $user_id: uuid!) {
    insert_restaurant_administrators_one(object: { user_id: $user_id, restaurant_id: $restaurant_id}) {
      id
      user_id
      restaurant_id
      restaurant {
        id
        description
        customization
        name
        owner_id
        slug
      }
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

