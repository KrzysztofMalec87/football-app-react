const initialState = {
  countries: [],
  notes2: 'sample',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
