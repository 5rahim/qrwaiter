import { gql } from 'graphql-request'

export const GetUserById = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      created_at
      email
      emailVerified
      id
      image
      name
      role
    }
  }
`

export const UpdateUserProfilePicture = gql`
  mutation UpdateUserProfilePicture($id: uuid!, $image: String!) {
    update_users(where: {id: {_eq: $id}}, _set: {image: $image}) {
      affected_rows
    }
  }
`
export const UpdateUserDetails = gql`
  mutation UpdateUserDetails($id: uuid!, $name: String!, $email: String!) {
    update_users(where: {id: {_eq: $id}}, _set: {name: $name, email: $email}) {
      affected_rows
    }
  }
`
