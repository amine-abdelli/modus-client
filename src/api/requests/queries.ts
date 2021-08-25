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

export { SELF_QUERY };
