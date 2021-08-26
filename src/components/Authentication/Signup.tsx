import { useMutation } from '@apollo/client';
import {
  Card, Form, Input, Button, Typography,
} from 'antd';
import { useHistory } from 'react-router';
import { SIGNUP_MUTATION } from '../../api/requests/queries';
import { Routes } from '../../Routes';

interface submitSignupFormArgs {
  email: string,
  password: string
}

const Signup = () => {
  const history = useHistory();
  const [signupUser] = useMutation(SIGNUP_MUTATION, {
    onCompleted: () => history.push(Routes.HOME),
    onError: () => history.push(Routes.HOME),
  });

  function submitSignupForm({ email, password }: submitSignupFormArgs) {
    signupUser({
      variables: {
        email,
        password,
      },
    });
  }
  const { Title } = Typography;
  return (
    <div className="login_container">
      <Card className="login_card">
        <Title level={3}>Inscription</Title>
        <Form
          className="login_form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={submitSignupForm}
          layout="vertical"
        >
          <Form.Item
            className="form_input"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Email" className="form_input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { message: 'At least 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number.' },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Mot de passe" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              { message: 'At least 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number.' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered must match.'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirmer mot de passe" />
          </Form.Item>
          <Form.Item>
            <Button className="form_input" type="primary" htmlType="submit">
              Se connecter
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export { Signup };