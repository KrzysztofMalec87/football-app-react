import React, { Component } from 'react';

import FadeInTop from '../../common/animations/FadeInTop';

class Form extends Component {
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
        animationDelay={600}
        className="c-form"
        pose={active ? 'visible' : 'hidden'}
      >
        <form>
          <select className="c-form__input" type="text">
            <option>Premier League</option>
            <option>Bundesliga</option>
          </select>
        </form>
      </FadeInTop>
    );
  }
}

export default Form;
