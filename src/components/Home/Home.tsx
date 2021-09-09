import { useState } from 'react';

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
  const [userNameInput, setUserNameInput] = useState<string>('');
  const [isFirstLoginModalVisible, setIsFirstLoginModalVisible] = useState(true);
  const [isMoodModalVisible, setIsMoodModalVisible] = useState(true);
  const { data } = useGetUser();
  const { name, moods } = data?.isLoggedIn;
  const todayDate = new Intl.DateTimeFormat('fr-FR').format(new Date());

  const isDailyMoodSet = moods.some((mood: moodArgs): boolean => (
    formatDate(mood?.createdAt) === todayDate));

  function getUserName(nameInputvalue: string) {
    setUserNameInput(nameInputvalue);
  }

  function onFirstLoginModalClose() {
    setIsFirstLoginModalVisible(false);
  }
  function onMoodModalClose() {
    setIsMoodModalVisible(false);
  }

  const showUserName = userNameInput || name;

  return (
    <>
      <h4>
        {(showUserName) && `Bonjour ${showUserName} :-) !`}
      </h4>
      {!name
       && (
       <Dialog
         question={DialogEnum.NAME}
         onUserInput={getUserName}
         onModalClose={onFirstLoginModalClose}
         openDialog={isFirstLoginModalVisible}
         data={data}
       />
       )}
      {showUserName && !isDailyMoodSet && (
      <DialogMood
        onModalClose={onMoodModalClose}
        openDialog={isMoodModalVisible}
        data={data}
      />
      )}
    </>
  );
};

export { Home };
