const initialState = {
    history: [],
  };
  
  const searchHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SEARCH_HISTORY':
        return {
          ...state,
          history: [action.payload, ...state.history],
        };
      default:
        return state;
    }
  };
  
  export default searchHistoryReducer;