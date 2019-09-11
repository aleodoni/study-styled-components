import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;

  padding: 0 20px;
  background-color: #575689;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuLogo = styled.div`
  h1 {
    font-size: 18px;
    display: flex;

    color: #fff;
    margin-right: 50px;

    svg {
      animation: ${rotate} 4s linear infinite;
      color: #fff;
      margin-right: 10px;
    }
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    list-style-type: none;
  }

  li button {
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border: 0;
    font-weight: bold;
    opacity: 0.8;
  }

  li button:hover {
    opacity: 1;
  }
`;

export const MenuToggle = styled.div``;
