import React, { Component } from 'react';

import FadeInTop from '../../common/animations/FadeInTop';

class Footer extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const { active } = this.state;

    return (
      <FadeInTop
        animationDelay={500}
        className="c-footer"
        pose={active ? 'visible' : 'hidden'}
      >
        <div className="c-footer__item">
          App created by <strong>Krzysztof Malec</strong>
        </div>
        <div className="c-footer__item"> www.krzysztofmalec.com</div>
      </FadeInTop>
    );
  }
}

export default Footer;
