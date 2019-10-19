export const addCountries = countries => ({
  type: 'ADD_COUNTRIES',
  payload: countries,
});

export const addLeagues = leagues => ({
  type: 'ADD_LEAGUES',
  payload: leagues,
});

export const addLeagueId = leagueId => ({
  type: 'ADD_LEAGUE_ID',
  payload: leagueId,
});

export const addLeagueStanding = leagueStanding => ({
  type: 'ADD_LEAGUE_STANDING',
  payload: leagueStanding,
});
