import React, { Component } from 'react';

import BallImage from '../../assets/images/ball.png';
import SlideFromLeft from '../../common/animations/SlideFromLeft';

class Ball extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const { active } = this.state;

    return (
      <SlideFromLeft
        animationDelay={800}
        className="c-ball"
        pose={active ? 'visible' : 'hidden'}
      >
        <img
          alt="Pro Futball App ball"
          className="c-ball__img"
          src={BallImage}
        />
      </SlideFromLeft>
    );
  }
}

export default Ball;
