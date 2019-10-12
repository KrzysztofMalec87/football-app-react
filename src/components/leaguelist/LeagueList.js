import React from 'react';

import LeagueLink from './leaguelink/LeagueLink';

const LeagueList = () => (
  <div className="container c-league-list">
    <div className="row c-league-list__row">
      <LeagueLink />
      <LeagueLink />
    </div>
  </div>
);

export default LeagueList;
