import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 95vh;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;

    padding: 0 40px 10px 40px;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
  }

  p svg {
    margin-right: 10px;
  }

  p:last-child {
    padding-bottom: 40px;
  }

  p a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: #fff;
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
  min-width: 360px;
  width: 40%;
  border-radius: 4px;
  opacity: 0.9;
`;
