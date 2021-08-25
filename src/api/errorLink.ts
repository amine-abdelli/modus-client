import { onError } from '@apollo/client/link/error';
import { GraphQLError } from 'graphql';

export const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error: GraphQLError) => {
      switch (error.extensions?.code) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case 'UNAUTHENTICATED':
          // ignore self query as it is called too often,
          // and would cause an infinite loop on the login page
          if (operation.operationName !== 'self') {
            window.location.reload();
          }
          break;
        default:
          break;
      }
      console.error(
        `[GraphQL error]: Message: ${error.message}, Location: ${JSON.stringify(error.locations)}, Path: ${error.path}`,
      );
    });
  }

  if (networkError) console.error(`[Network error]: ${networkError}`);
});
