import { ApolloError, useLazyQuery } from '@apollo/client';
import {
  Card, Form, Input, Button, message,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetUser } from '../../api/hooks/useGetUser';
import { LOGIN_QUERY } from '../../api/requests/queries';
import { Routes } from '../../Routes';

import './Login.less';

export interface loginFormInterface {
  email: string,
  password: string
}

const Login = () => {
  const history = useHistory();
  const { isLoggedIn } = useGetUser();
  console.log(isLoggedIn);
  useEffect(() => console.log('yo'));
  const [getLoggedIn] = useLazyQuery(LOGIN_QUERY, {
    onCompleted: () => {
      window.location.replace(Routes.HOME);
    },
    onError: (error: ApolloError) => {
      window.location.replace(Routes.LOGIN);
    },
  });
  function onFormSubmit(values: any) {
    history.push(Routes.HOME);

    message.success('Bienvenue à bord !');
    getLoggedIn({
      variables: { ...values },
    });
  }

  return (
    <div className="login_container">
      <Card className="login_card">
        <Title level={3}>Bienvenue</Title>
        <Form
          className="login_form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFormSubmit}
          layout="vertical"
        >
          <Form.Item
            className="form_input"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Email" className="aaa form_input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Mot de passe" />
          </Form.Item>
          <Form.Item>
            <Button className="form_input" type="primary" htmlType="submit">
              Se connecter
            </Button>
          </Form.Item>
        </Form>
        <p>
          Vous n&apos;avez pas de compte?
          <Link to={Routes.SIGNUP}>
            <Button type="link">
              Inscrivez-sous
            </Button>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export { Login };
