const actionTypes = {
  INPUT_QUERY: "INPUT_QUERY",
  LOAD_SHOWS: "LOAD_SHOWS",
  GET_SHOW: "GET_SHOW",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.INPUT_QUERY:
      return { ...state, query: action.payload };
    case actionTypes.LOAD_SHOWS:
      return { ...state, shows: action.payload };
    default:
      return state;
  }
};
