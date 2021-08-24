import { QueryHookOptions, useQuery } from '@apollo/client';
import { SELF_QUERY } from '../requests/queries';

function useGetUser(options: QueryHookOptions = {}) {
  const { data, ...rest } = useQuery(SELF_QUERY, {
    errorPolicy: 'ignore',
    ...options,
  });
  console.log('DATA', data);
  // const isLoggedIn = Boolean(data?.self.email);

  return { data, ...rest };
}

export { useGetUser };
