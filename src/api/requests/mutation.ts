import { gql } from '@apollo/client';

const INPUT_USER_NAME = gql`
    mutation InputYourName(
        $name: String!
        $id: String!
    ) {
        addUserName(name: $name, id: $id) {
            user {
                id
                name
                email
            }
        }
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

export { INPUT_USER_NAME, SIGNUP_MUTATION };
