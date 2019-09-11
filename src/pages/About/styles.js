import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  p {
    padding: 0 40px 10px 40px;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
  }

  p:last-child {
    padding-bottom: 40px;
  }

  h1 {
    padding: 40px;
    color: #fff;
    font-size: 20px;
  }
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #575689;
  width: 40%;
  border-radius: 4px;
  opacity: 0.9;
`;
