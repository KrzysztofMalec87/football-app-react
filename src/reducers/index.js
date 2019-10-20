const initialState = {
  countries: [],
  leagues: [],
  leagueStanding: [],
  leagueInfo: [],
  leagueId: null,
  season: 2019,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };
    case 'ADD_LEAGUES':
      return {
        ...state,
        leagues: action.payload,
      };
    case 'ADD_LEAGUE_ID':
      return {
        ...state,
        leagueId: action.payload,
      };
    case 'ADD_LEAGUE_STANDING':
      return {
        ...state,
        leagueStanding: action.payload,
      };
    case 'ADD_LEAGUE_DETAILS':
      return {
        ...state,
        leagueInfo: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
