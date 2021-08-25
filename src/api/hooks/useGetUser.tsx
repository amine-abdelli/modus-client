import { QueryHookOptions, useQuery } from '@apollo/client';
import { SELF_QUERY } from '../requests/queries';

function useGetUser(options: QueryHookOptions = {}) {
  const { data, ...rest } = useQuery(SELF_QUERY, {
    errorPolicy: 'ignore',
    ...options,
  });
  const isLoggedIn = Boolean(data?.isLoggedIn?.email);
  return { data, ...rest, isLoggedIn };
}

export { useGetUser };
