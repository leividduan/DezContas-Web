import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;

    img {
      width: 250px;
    }
  }

  width: 500px;
  background: #fff;
  padding: 64px;
  border-radius: 8px;
`;

export const Footer = styled.footer`
  margin-top: 24px;

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary.main};
      transition: border-bottom 150ms ease-in-out 0s;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.colors.primary.main};
        transition: width 0.3s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
`;
