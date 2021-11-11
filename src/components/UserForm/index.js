import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, ButtonContainer } from './styles';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Loader from '../Loader';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';

import UserService from '../../services/UserService';

export default function UserForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();
  const history = useHistory();
  const formIsValid = name && username && email && password && repeatPassword && errors.length === 0;

  function handleOnChangeName(event) {
    setName(event.target.value);
  }

  function handleOnChangeUsername(event) {
    setUsername(event.target.value);
  }

  async function handleOnBlurUsername() {
    if (username) {
      try {
        const existUsername = await UserService.getByUsername(username);
        if (existUsername) {
          setError({ field: 'username', message: 'Esse Username já está sendo utilizado por outro usuário.' });
        }
      } catch {
        removeError('username');
      }
    }
  }

  function handleOnChangeEmail(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handleOnChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleOnChangeRepeatPassword(event) {
    setRepeatPassword(event.target.value);

    if (event.target.value && event.target.value !== password) {
      setError({ field: 'repeatPassword', message: 'As senhas devem ser iguais.' });
    } else {
      removeError('repeatPassword');
    }
  }

  async function handleOnSubmitUser(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      await UserService.createUser({ name, username, email, password });
      setIsLoading(false);
      history.push('/login');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Form onSubmit={handleOnSubmitUser} noValidate>
        <FormGroup>
          <Input placeholder="Nome" value={name} onChange={handleOnChangeName} />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('username')}>
          <Input
            placeholder="Username"
            value={username}
            onChange={handleOnChangeUsername}
            onBlur={handleOnBlurUsername}
            error={getErrorMessageByFieldName('username')}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={handleOnChangeEmail}
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Senha" type="password" value={password} onChange={handleOnChangePassword} />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('repeatPassword')}>
          <Input
            placeholder="Repita a senha"
            type="password"
            value={repeatPassword}
            onChange={handleOnChangeRepeatPassword}
            error={getErrorMessageByFieldName('repeatPassword')}
          />
        </FormGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!formIsValid}>
            Cadastrar
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}
