import React, { Component } from 'react';

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
        animationDelay={100}
        className="c-header"
        pose={active ? 'visible' : 'hidden'}
      >
        <img src={logo} alt="Football App" />
      </FadeInBottom>
    );
  }
}

export default Header;
