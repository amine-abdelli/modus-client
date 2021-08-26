import './App.less';
import Layout, { Header } from 'antd/lib/layout/layout';
import { Routes } from './Routes/Routes';
import { NavBar } from './components/NavBar/NavBar';
import { useGetUser } from './api/hooks/useGetUser';

const App = () => {
  const { isLoggedIn } = useGetUser();
  return (
    <>
      <Layout>
        { isLoggedIn ? (
          <Header style={{ backgroundColor: 'blue' }}>
            <NavBar />
          </Header>
        ) : ''}
        <Layout style={{ minHeight: '100vh' }}>
          <Routes />
        </Layout>
      </Layout>
    </>
  );
};
export default App;
