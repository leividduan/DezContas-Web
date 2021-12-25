import styled from 'styled-components';

export const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background-color 0.2s ease-in;
  border-radius: 20px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const ActionOptions = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  position: absolute;
  width: 180px;
  left: ${({ left }) => left - 80}px;
  top: ${({ top }) => top + 40}px;
  background-color: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;

  a {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.gray[900]};
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  .danger {
    &:hover {
      color: ${({ theme }) => theme.colors.danger.main};
      background-color: ${({ theme }) => theme.colors.danger.lighter};
    }
  }
`;
