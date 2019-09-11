import React, { Component } from 'react';

import Menu from '../../components/Menu';
import { Container, Dialog } from './styles';
import aboutJson from '../../data/about.json';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { about: aboutJson };
  }

  render() {
    const { about, whoami } = this.state;

    return (
      <>
        <Menu />
        <Container>
          <Dialog>
            <h1>About</h1>
            <p>{about.info}</p>
            <h1>Me</h1>
            <p>
              <strong>Name:</strong> {about.whoami.author}
            </p>
            <p>
              <strong>email:</strong> {about.whoami.email}
            </p>
            <p>
              <strong>Linkedin:</strong> {about.whoami.linkedin}
            </p>
            <p>
              <strong>GitHub:</strong> {about.whoami.github}
            </p>
          </Dialog>
        </Container>
      </>
    );
  }
}

export default About;
