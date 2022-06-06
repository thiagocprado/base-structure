import React, { useContext, useState } from 'react';
import { Button, Screen, Input } from '../../components';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../Context/authContext';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [state, setState] = useState({
    loadingState: false,
    modalState: { title: 'Erro', text: '', toggle: false, onHide: '' },
  });
  const { handleLogin } = useContext(Context);

  const handleChange = (id, value) => {
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async () => {
    setState({ ...state, loadingState: true });
    const response = await handleLogin(user);

    if (response.ok) {
      window.location.href = '/';
    } else {
      state.modalState = {
        title: 'Erro',
        text: response.message,
        toggle: true,
        onHide: () => {
          state.modalState.toggle = false;
          setState({ state });
        },
      };
    }
    setState({ state });
    setState({ ...state, loadingState: false });
  };

  const body = () => {
    return (
      <Row>
        <Col align={'center'}>
          <Col>
            <h2>Bem-Vindo</h2>
          </Col>
          <Col sm={10}>
            <Input
              type="email"
              value={user.email}
              placeholder={'E-mail'}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Col>
          <Col sm={10}>
            <Input
              type="password"
              value={user.password}
              placeholder={'Password'}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </Col>
        </Col>
      </Row>
    );
  };

  const footer = () => {
    return (
      <Row>
        <Button underline text={'Entrar'} onClick={handleSubmit} />
      </Row>
    );
  };

  return (
    <Screen
      login
      body={body}
      footer={footer}
      modalState={state.modalState}
      loadingState={state.loadingState}
    />
  );
};

export default Login;
