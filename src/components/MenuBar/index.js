import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav, Menu, MenuItem } from './styles';

import logo from '../../assets/images/logo.svg';
import showMenuBar from '../../utils/showMenuBar';

export default function MenuBar() {
  const [name, setName] = useState('');
  const location = useLocation();
  const show = showMenuBar(location.pathname);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setName(user?.name);
  }, [user]);

  return (
    show && (
      <Nav>
        <img src={logo} alt="DezContas" />
        <Menu>
          <MenuItem active={location.pathname === '/'}>
            <Link to="/">início</Link>
          </MenuItem>
          <MenuItem active={location.pathname === '/lancamentos'}>
            <Link to="/lancamentos">lançamentos</Link>
          </MenuItem>
          <MenuItem active={location.pathname === '/categorias'}>
            <Link to="/categorias">categorias</Link>
          </MenuItem>
          <MenuItem active={location.pathname === '/relatorios'}>
            <Link to="/relatorios">relatórios</Link>
          </MenuItem>
        </Menu>
        <p>{name}</p>
      </Nav>
    )
  );
}
