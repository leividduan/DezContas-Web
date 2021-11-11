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
