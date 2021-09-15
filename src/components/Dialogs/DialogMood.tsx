import { useState } from 'react';
import {
  Form, Input, Modal, message,
} from 'antd';
import { useMutation } from '@apollo/client';
import { EnterOutlined } from '@ant-design/icons';
import { Dialog } from './Dialog.enum';
import { CREATE_MOOD_MUTATION } from '../../api/requests/mutation';
import { MoodInput } from './MoodInput';

export interface MoodInputArgs {
  rate: number,
  phrase?: string | null,
  userId?: string,
  createdAt?: Date
}

const DialogMood = ({
  openDialog, data, onModalClose,
}: any) => {
  const { id, name } = data?.isLoggedIn;
  const [moodRate, setMoodRate] = useState<MoodInputArgs>({
    rate: 0,
    phrase: '',
    userId: id,
  });

  const [SetDailyMood] = useMutation(CREATE_MOOD_MUTATION, {
    onCompleted: () => {
      message.success('Merci !');
      onModalClose();
    },
    onError: () => message.error('Failed :('),
  });

  function onMoodRateSelect(i: number) {
    setMoodRate({
      ...moodRate,
      rate: i,
    });
  }

  function moodFormSubmit() {
    SetDailyMood({
      variables: moodRate,
    });
  }

  return (
    <>
      <Modal
        className="dialog-modal"
        visible={openDialog}
        footer={null}
        closable={false}
        onCancel={onModalClose}
        mask={false}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ textAlign: 'center' }}>{`Salut ${name || ''} t'es dans quel mood aujourd'hui?`}</p>
          <MoodInput
            onMoodRateSelect={onMoodRateSelect}
          />
        </div>
        <Form
          initialValues={{ remember: true }}
          onFinish={moodFormSubmit}
          onChange={(e) => {
            const target = e.target as HTMLTextAreaElement;
            return (
              setMoodRate({
                ...moodRate,
                phrase: target.value,
              })
            );
          }}
        >
          {moodRate?.rate > 0 && (
            <>
              <p>{Dialog.PHRASE}</p>
              <Form.Item
                name="username"
                rules={[{ required: false }]}
              >
                <Input maxLength={175} suffix={<EnterOutlined />} />
              </Form.Item>
            </>
          )}

        </Form>
      </Modal>
    </>
  );
};

export { DialogMood };
