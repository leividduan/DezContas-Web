import { Link } from 'react-router-dom';
import { Container, FormContainer, Footer } from './styles';

import LoginForm from '../../components/LoginForm';
import logo from '../../assets/images/logo.svg';

export default function Login() {
  return (
    <Container>
      <FormContainer>
        <header>
          <img src={logo} alt="DezContas" />
        </header>
        <LoginForm />
      </FormContainer>
      <Footer>
        <span>
          Ainda não possui conta? <Link to="/cadastro">Faça o seu cadastro!</Link>
        </span>
      </Footer>
    </Container>
  );
}
