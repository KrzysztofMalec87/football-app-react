import React from 'react';

import LeagueList from '../../components/league/leaguelist/LeagueList';

const CountryView = props => {
  const {
    match: {
      params: { id: countryId },
    },
  } = props;

  return <LeagueList countryId={countryId} />;
};

export default CountryView;
