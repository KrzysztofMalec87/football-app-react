import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeagueLink from './leaguelink/LeagueLink';
import FadeInTop from '../../common/animations/FadeInTop';
import fetchApi from '../../common/apiconnections';
import { addLeagues } from '../../actions';

class LeagueList extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    const { season, addLeagues: addLeaguesToState, countryId } = this.props;

    const fetchLink = `${process.env.REACT_APP_API_URL_LEAGUES}/${countryId}/${season}`;

    fetchApi(fetchLink).then(respond => {
      const {
        api: { leagues },
      } = respond;

      addLeaguesToState(leagues);

      this.setState({
        active: true,
      });
    });
  }

  render() {
    const { leagues } = this.props;
    const { active } = this.state;

    return (
      <FadeInTop
        animationDelay={400}
        className="container c-league-list"
        pose={active ? 'visible' : 'hidden'}
      >
        <div className="row c-league-list__row">
          {leagues.map((singleLeague, index) => {
            const { league_id: leagueId } = singleLeague;
            const key = `${leagueId}-${index}`;

            return <LeagueLink leagueData={singleLeague} key={key} />;
          })}
        </div>
      </FadeInTop>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addLeagues: leagues => dispatch(addLeagues(leagues)),
});

const mapStateToProps = ({ leagues, season }) => ({ leagues, season });

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LeagueList);
