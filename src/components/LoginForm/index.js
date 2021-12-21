import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';
import Loader from '../Loader';

import UserService from '../../services/UserService';
import APIError from '../../errors/APIError';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => () => {}, []);

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      const user = await UserService.login({ username, password });
      if (user) {
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(user));
      }

      setIsLoading(false);
      history.push('/');
    } catch (err) {
      if (err instanceof APIError && err.response.status === 404) {
        setError('Usuário ou senha inválidos.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Form onSubmit={handleOnSubmit} noValidate>
        <FormGroup>
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormGroup>
        <FormGroup error={error}>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <ButtonContainer>
          <Link to="/esqueci-minha-senha">Esqueceu a senha?</Link>
          <Button type="submit">Login</Button>
        </ButtonContainer>
      </Form>
    </>
  );
}
