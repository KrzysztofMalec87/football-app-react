import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLeagueStanding } from '../../../actions';
import { TABLE_HEADING } from '../../../common/constants';
import fetchApi from '../../../common/apiconnections';
import LeagueStandingItem from './leaguestandingitem/LeagueStandingItem';

class LeagueStanding extends Component {
  state = {
    id: null,
  };

  componentDidUpdate() {
    const {
      leagueId,
      addLeagueStanding: addLeagueStandingToState,
      leagueStanding,
    } = this.props;
    const { id } = this.state;

    if (
      (leagueId !== null && leagueStanding && leagueStanding.length === 0) ||
      id !== leagueId
    ) {
      const fetchLink = `${process.env.REACT_APP_API_URL_LEAGUE_STANDING}/${leagueId}`;

      fetchApi(fetchLink).then(respond => {
        const {
          api: {
            standings: { 0: fetchedStanding },
          },
        } = respond;

        addLeagueStandingToState(fetchedStanding);

        this.setState({ id: leagueId });
      });
    }
  }

  render() {
    const { leagueStanding } = this.props;

    return (
      <div>
        {leagueStanding && leagueStanding.length > 0 && (
          <div className="c-league-standing">
            <h3 className="c-league-standing__name">League standing</h3>
            <div className="c-league-standing__table">
              <LeagueStandingItem data={TABLE_HEADING} featured />

              {leagueStanding.map((data, index) => {
                const { team_id: teamId } = data;
                const key = `${teamId}-${index}`;

                return <LeagueStandingItem data={data} key={key} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addLeagueStanding: leagueStanding =>
    dispatch(addLeagueStanding(leagueStanding)),
});

const mapStateToProps = ({ leagueId, leagueStanding }) => ({
  leagueId,
  leagueStanding,
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LeagueStanding);
