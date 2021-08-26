import { gql } from '@apollo/client';

const SELF_QUERY = gql`
query Query {
  isLoggedIn {
    id
    email
    name
      moods {
        id
        rate
        phrase
      }
  }
}
`;

const LOGIN_QUERY = gql`
query LoginQuery(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
    }
  }
`;

const LOGOUT_QUERY = gql`
query LogoutQuery {
  logout
}
`;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
  ) {
    signup(
      email: $email
      rawPassword: $password
    ) {
      user { 
        id
        email
      }
    }
  }
`;

export {
  SELF_QUERY, LOGIN_QUERY, LOGOUT_QUERY, SIGNUP_MUTATION,
};
