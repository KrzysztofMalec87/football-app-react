import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLeagueDetails } from '../../../actions';
import fetchApi from '../../../common/apiconnections';
import Placeholder from '../../../assets/images/placeholder.png';

class LeagueDetails extends Component {
  state = {
    id: null,
  };

  componentDidUpdate() {
    const {
      leagueId,
      addLeagueDetails: addLeagueDetailsToState,
      leagueInfo,
    } = this.props;
    const { id } = this.state;

    if (
      (leagueId !== null && leagueInfo && leagueInfo.length === 0) ||
      id !== leagueId
    ) {
      const fetchLink = `${process.env.REACT_APP_API_URL_LEAGUE}/${leagueId}`;
      fetchApi(fetchLink).then(respond => {
        const {
          api: {
            leagues: { 0: fetchedLeague },
          },
        } = respond;

        addLeagueDetailsToState(fetchedLeague);

        this.setState({ id: leagueId });
      });
    }
  }

  render() {
    const {
      leagueInfo,
      leagueInfo: {
        logo,
        name,
        season,
        country,
        season_start: seasonStart,
        season_end: seasonEnd,
      },
    } = this.props;
    const leagueLogo = logo || Placeholder;
    console.log(leagueInfo);

    return (
      <div>
        {leagueInfo && (
          <div className="c-league-details">
            <h3 className="c-league-details__name">League details</h3>
            <div className="c-league-details-block">
              <div className="c-league-details-block__item">
                <div className="c-league-details-block__logo-container">
                  <img
                    alt={name}
                    className="c-league-details-block__logo"
                    src={leagueLogo}
                  />
                </div>
              </div>
              <div className="c-league-details-block__item c-league-details-block__item--row">
                <div className="c-league-details-block__row">
                  <h5>{name}</h5>
                </div>
                <div className="c-league-details-block__row">
                  <b>Country:</b> {country}
                </div>
                <div className="c-league-details-block__row">
                  <b>Season:</b> {season}
                </div>
                <div className="c-league-details-block__row">
                  <b>Season start:</b> {seasonStart}
                </div>
                <div className="c-league-details-block__row">
                  <b>Season end:</b> {seasonEnd}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addLeagueDetails: LeagueData => dispatch(addLeagueDetails(LeagueData)),
});

const mapStateToProps = ({ leagueId, leagueInfo }) => ({
  leagueId,
  leagueInfo,
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LeagueDetails);
