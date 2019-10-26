import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FadeInBottom from '../../common/animations/FadeInBottom';
import logo from '../../assets/images/logo.png';

class Header extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const { active } = this.state;

    return (
      <FadeInBottom
        animationDelay={300}
        className="c-header"
        pose={active ? 'visible' : 'hidden'}
      >
        <Link className="c-header__link" to="/">
          <img src={logo} alt="Football App" />
        </Link>
      </FadeInBottom>
    );
  }
}

export default Header;
