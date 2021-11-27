import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  p {
    color: #fff;
  }
`;

export const Menu = styled.ul`
  border-radius: 0px 0px 4px 4px;
  display: flex;
  gap: 16px;
  padding: 0 16px;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  a {
    display: block;
    color: #fff;
    text-align: center;
    text-decoration: none;
    padding: auto 0;
    height: 48px;
    padding: 16px 0;
    transition: border-bottom 0.1s ease-in;

    &:hover {
      border-bottom: 2px solid #fff;
      color: white;
    }

    ${({ active }) =>
      active &&
      css`
        border-bottom: 2px solid #fff;
      `}
  }
`;
