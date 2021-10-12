import './App.less';
import Layout from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Routes } from './components/Routes/Routes';
import { NavBar } from './components/NavBar/NavBar';
import { useGetUser } from './api/hooks/useGetUser';

const App = () => {
  const { isLoggedIn } = useGetUser();
  return (
    <>
      <Layout style={{ height: '100vh' }}>

        { isLoggedIn ? (
          <Sider
            style={{ backgroundColor: 'white' }}
            width="7rem"
          >
            <NavBar />
          </Sider>
        ) : ''}
        <Layout style={{ height: '100%' }}>
          <Routes />
        </Layout>
      </Layout>
    </>
  );
};
export default App;
