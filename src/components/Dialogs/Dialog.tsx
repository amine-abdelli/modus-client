import { useState } from 'react';
import {
  Form, Input, Modal, Button, message,
} from 'antd';
import { useMutation } from '@apollo/client';
import { INPUT_USER_NAME } from '../../api/requests/mutation';

const Dialog = ({
  openDialog, data, onModalClose, question, onUserInput,
}: any) => {
  const [userName, setUserName] = useState<string>('');
  const [signupUser] = useMutation(INPUT_USER_NAME, {
    onCompleted: () => message.success(`Bienvenue ${userName}`),
    onError: () => message.error('Une erreur s\'est produite'),
  });

  function onUserNameFormSubmit(inputvalue: any) {
    onUserInput(inputvalue.username);
    signupUser({
      variables: {
        name: inputvalue.username,
        id: data?.isLoggedIn?.id,
      },
    });
    onModalClose();
    message.success(`Bienvenue ${userName}`);
  }
  console.log(data);

  return (
    <>
      <Modal
        visible={openDialog}
        footer={null}
        closable={false}
        onCancel={onModalClose}
      >
        <div>
          <p>{question}</p>
        </div>
        <Form
          initialValues={{ remember: true }}
          onFinish={onUserNameFormSubmit}
          onChange={(e) => {
            const target = e.target as HTMLTextAreaElement;
            return (
              setUserName(target.value)
            );
          }}
        >
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
        </Form>
      </Modal>
    </>
  );
};

export { Dialog };
