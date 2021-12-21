import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import ForgotPassword from './pages/ForgotPassword';
import Transaction from './pages/Transaction';
import Category from './pages/Category';
import Report from './pages/Report';
import NewCategory from './pages/NewCategory';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={NewUser} />
      <Route path="/esqueci-minha-senha" component={ForgotPassword} />
      <Route path="/lancamentos" component={Transaction} />
      <Route path="/categorias" component={Category} />
      <Route path="/nova-categoria" component={NewCategory} />
      <Route path="/relatorios" component={Report} />
    </Switch>
  );
}
