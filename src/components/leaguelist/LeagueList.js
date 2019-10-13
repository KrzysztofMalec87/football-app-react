import React from 'react';
import { connect } from 'react-redux';

import LeagueLink from './leaguelink/LeagueLink';

const LeagueList = props => {
  const { notes } = props;

  return (
    <div className="container c-league-list">
      <div className="row c-league-list__row">
        {notes}
        <LeagueLink />
        <LeagueLink />
      </div>
    </div>
  );
};
const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(LeagueList);
