import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  a {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-decoration: none;
  }

  button {
    margin-top: 8px;
    width: 100%;
  }
`;
