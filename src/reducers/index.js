const initialState = {
  countries: [],
  leagues: [],
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

    default:
      return state;
  }
};

export default rootReducer;
