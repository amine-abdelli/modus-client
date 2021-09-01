import { useState, useEffect } from 'react';

import { Dialog as DialogEnum } from '../Dialogs/Dialog.enum';
import './Home.less';
import { useGetUser } from '../../api/hooks/useGetUser';
import { Dialog } from '../Dialogs/Dialog';
import { DialogMood } from '../Dialogs/DialogMood';
import { formatDate } from '../../utils';

export interface moodArgs {
  id: string
  phrase: string
  rate: string,
  createdAt: Date,
}

const Home = () => {
  const [isUserNameSubmitted, setIsUserNameSubmitted] = useState<string>('');
  const [isFirstLoginModalVisible, setIsFirstLoginModalVisible] = useState(true);
  const [isMoodModalVisible, setIsMoodModalVisible] = useState(false);
  const { data } = useGetUser();

  const todayDate = new Intl.DateTimeFormat('fr-FR').format(new Date());

  const isDailyMoodSet = data?.isLoggedIn?.moods.some((mood: moodArgs): boolean => (
    formatDate(mood?.createdAt) === todayDate));

  function getUserName(nameInputvalue: string) {
    setIsUserNameSubmitted(nameInputvalue);
  }

  useEffect(() => {
    (!isDailyMoodSet) && setIsMoodModalVisible(true);
  }, []);

  function onModalClose() {
    setIsFirstLoginModalVisible(false);
    setIsMoodModalVisible(false);
  }

  const showUserName = isUserNameSubmitted || data?.isLoggedIn?.name;

  return (
    <>
      <h4>
        {(showUserName) && `Bonjour ${showUserName} :-) !`}
      </h4>
      {!data?.isLoggedIn?.name
       && (
       <Dialog
         question={DialogEnum.NAME}
         onUserInput={getUserName}
         onModalClose={onModalClose}
         openDialog={isFirstLoginModalVisible}
         data={data}
       />
       )}
      {data?.isLoggedIn?.name && !isDailyMoodSet && (
      <DialogMood
        onModalClose={onModalClose}
        openDialog={isMoodModalVisible}
        data={data}
      />
      )}
    </>
  );
};

export { Home };
