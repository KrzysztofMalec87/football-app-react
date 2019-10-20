import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLeagueId } from '../../actions';
import FadeInTop from '../../common/animations/FadeInTop';
import LeagueStanding from '../../components/league/leaguestanging/LeagueStanding';
import LeagueDetails from '../../components/league/leaguedetails/LeagueDetails';

class LeagueView extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    const { addLeagueId: addLeagueIdToState } = this.props;
    const leagueIdFromSlug = this.getleagueIdFromSlug();

    addLeagueIdToState(leagueIdFromSlug);

    this.setState({ active: true });
  }

  getleagueIdFromSlug = () => {
    let {
      match: {
        params: { id },
      },
    } = this.props;

    id = id
      .match(/_[0-9]+/g)
      .join('')
      .replace('_', '');

    return parseInt(id, 10);
  };

  render() {
    const { active } = this.state;

    return (
      <FadeInTop
        animationDelay={400}
        className="container"
        pose={active ? 'visible' : 'hidden'}
      >
        <div className="c-league">
          <div className="row">
            <div className="col-lg-7">
              <LeagueDetails />
            </div>
            <div className="col-lg-5">
              <LeagueStanding />
            </div>
          </div>
        </div>
      </FadeInTop>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addLeagueId: leagueId => dispatch(addLeagueId(leagueId)),
});

const mapStateToProps = ({ leagueId }) => ({ leagueId });

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LeagueView);
