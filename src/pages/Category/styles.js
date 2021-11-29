import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  margin-bottom: 16px;

  h1 {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-left: solid 5px ${({ borderColor }) => borderColor};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.04);

  border-radius: 5px;
  transition: background 0.2s ease-in;

  & + & {
    margin-top: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 8px;

    a {
      color: ${({ theme }) => theme.colors.gray[200]};
      text-decoration: none;
      font-size: 14px;

      &:hover {
        color: ${({ theme }) => theme.colors.gray[900]};
      }
    }

    .danger {
      &:hover {
        color: ${({ theme }) => theme.colors.danger.main};
      }
    }
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
