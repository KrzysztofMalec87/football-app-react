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
        animationDelay={300}
        className="c-player"
        pose={active ? 'visible' : 'hidden'}
      >
        <img src={PlayerImage} alt="Pro Futball App playes" />
      </SlideFromRight>
    );
  }
}

export default Player;
