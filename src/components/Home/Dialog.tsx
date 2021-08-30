import { useState } from 'react';
import {
  Form, Input, Modal, Button, message,
} from 'antd';
import { useMutation } from '@apollo/client';
import { INPUT_USER_NAME } from '../../api/requests/mutation';

const Dialog = ({ openDialog, data, onModalClose }: any) => {
  const [userName, setUserName] = useState<string>('');
  const [signupUser] = useMutation(INPUT_USER_NAME, {
    onCompleted: () => message.success(`Bienvenue ${userName}`),
    onError: () => message.error('Une erreur s\'est produite'),
  });

  function onUserNameFormSubmit(inputvalue: any) {
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
    <p style={{ backgroundColor: 'blue' }}>
      {data?.isLoggedIn?.name && `Hello ${data?.isLoggedIn?.name}`}
      {' '}
      <Modal
        visible={openDialog}
        footer={null}
        closable={false}
        onCancel={onModalClose}
      >
        <div>
          <p>Hello, dis moi comment tu t&apos;appelles?</p>
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
    </p>
  );
};

export { Dialog };
