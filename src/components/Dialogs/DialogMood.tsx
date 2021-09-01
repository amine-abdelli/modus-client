import { useState } from 'react';
import {
  Form, Input, Modal, Button, message,
} from 'antd';
import { useMutation } from '@apollo/client';
import { Dialog } from './Dialog.enum';
import { CREATE_MOOD_MUTATION } from '../../api/requests/mutation';
import { MoodInput } from './MoodInput';

interface MoodInputArgs {
  rate: number,
  phrase: string,
  userId: string
}

const DialogMood = ({
  openDialog, data, onModalClose,
}: any) => {
  const [moodRate, setMoodRate] = useState<MoodInputArgs>({
    rate: 0,
    phrase: '',
    userId: data?.isLoggedIn?.id,
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
        visible={openDialog}
        footer={null}
        closable={false}
        onCancel={onModalClose}
      >
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
          <p>{Dialog.MOOD}</p>
          <MoodInput
            onMoodRateSelect={onMoodRateSelect}
          />
          {moodRate.rate > 0 && (
            <>
              <p>{Dialog.PHRASE}</p>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </>
          )}

        </Form>
      </Modal>
    </>
  );
};

export { DialogMood };
