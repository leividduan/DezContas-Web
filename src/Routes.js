import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import ForgotPassword from './pages/ForgotPassword';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={NewUser} />
      <Route path="/esqueci-minha-senha" component={ForgotPassword} />
    </Switch>
  );
}
