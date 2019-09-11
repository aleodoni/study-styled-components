import React, { Component } from 'react';
import { FaLinkedinIn, FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

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
              <FaUserCircle />
              {about.whoami.author}
            </p>
            <p>
              <MdMail />
              <a href={`mailto:${about.whoami.email}`}>{about.whoami.email}</a>
            </p>
            <p>
              <FaLinkedinIn />{' '}
              <a href={`${about.whoami.linkedin}`}>{about.whoami.linkedin}</a>
            </p>
            <p>
              <FaGithubAlt />

              <a href={`${about.whoami.github}`}>{about.whoami.github}</a>
            </p>
          </Dialog>
        </Container>
      </>
    );
  }
}

export default About;
