import './App.less';
import Layout, { Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Routes } from './Routes/Routes';
import { NavBar } from './components/NavBar/NavBar';
import { useGetUser } from './api/hooks/useGetUser';

const App = () => {
  const { isLoggedIn } = useGetUser();
  return (
    <>
      <Layout>
        { isLoggedIn ? (
          <Sider
            style={{ backgroundColor: 'white', padding: '0.3rem' }}
            width="7rem"
          >
            <NavBar />
          </Sider>
        ) : ''}
        <Layout style={{ minHeight: '100vh', padding: '0.3rem' }}>
          <Routes />
        </Layout>
      </Layout>
    </>
  );
};
export default App;
