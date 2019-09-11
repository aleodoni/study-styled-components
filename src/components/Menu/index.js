import React from 'react';
import { DiReact } from 'react-icons/di';
import { Link } from 'react-router-dom';

import { Container, MenuLogo, MenuOptions, MenuToggle } from './styles';

export default function Menu() {
  return (
    <Container>
      <nav>
        <MenuLogo>
          <h1>
            <DiReact size={18} />
            ReactJS Styled-Components
          </h1>
        </MenuLogo>
        <MenuOptions>
          <li>
            <Link to="/">
              <button type="button">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button type="button">About</button>
            </Link>
          </li>
          <li>
            <Link to="/example01">
              <button type="button">Example 01</button>
            </Link>
          </li>
        </MenuOptions>
        <MenuToggle />
      </nav>
    </Container>
  );
}
