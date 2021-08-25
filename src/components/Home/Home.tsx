import './Home.less';
import { useGetUser } from '../../api/hooks/useGetUser';

const Home = () => {
  const { data } = useGetUser();
  return (
    <>
      <p>
        Hello
        {' '}
        {data?.isLoggedIn?.email}
      </p>
    </>
  );
};

export { Home };
