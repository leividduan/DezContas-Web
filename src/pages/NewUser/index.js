import { Container, FormContainer } from './styles';

import logo from '../../assets/images/logo.svg';
import UserForm from '../../components/UserForm';

export default function NewUser() {
  return (
    <Container>
      <FormContainer>
        <header>
          <img src={logo} alt="DezContas" />
        </header>
        <UserForm />
      </FormContainer>
    </Container>
  );
}
