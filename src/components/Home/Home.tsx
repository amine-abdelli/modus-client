import React, { useState, useEffect } from 'react';

import './Home.less';
import { useGetUser } from '../../api/hooks/useGetUser';
import { Dialog } from './Dialog';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    !data?.isLoggedIn?.name && setIsModalVisible(true);
  }, []);

  function onModalClose() {
    setIsModalVisible(false);
  }

  const { data } = useGetUser();
  return (
    <>
      {data?.isLoggedIn?.name
       && <Dialog onModalClose={onModalClose} openDialog={isModalVisible} data={data} />}
    </>
  );
};

export { Home };
