import React, { Component } from 'react';

import PlayerImage from '../../assets/images/player.png';
import SlideFromRight from '../../common/animations/SlideFromRight';

class Player extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    const { active } = this.state;

    return (
      <SlideFromRight
        animationDelay={700}
        className="c-player"
        pose={active ? 'visible' : 'hidden'}
      >
        <img
          alt="Pro Futball App playes"
          className="c-player__img"
          src={PlayerImage}
        />
      </SlideFromRight>
    );
  }
}

export default Player;
