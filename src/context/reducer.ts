const actionTypes = {
  INPUT_QUERY: "INPUT_QUERY",
  LOAD_SHOWS: "LOAD_SHOWS",
  GET_SHOW: "GET_SHOW",
  TRIGGER_LOADER: "TRIGGER_LOADER",
  HANDLE_ERROR: "HANDLE_ERROR",
  VIEW_SHOW: "VIEW_SHOW",
  CLEAR_VIEW: "CLEAR_VIEW",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.INPUT_QUERY:
      return { ...state, query: action.payload, error: null };
    case actionTypes.LOAD_SHOWS:
      return { ...state, shows: action.payload };
    case actionTypes.TRIGGER_LOADER:
      return { ...state, loader: action.payload };
    case actionTypes.HANDLE_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.CLEAR_VIEW:
      return { ...state, curView: null };
    case actionTypes.VIEW_SHOW:
      let curView = state.shows[0];
      if (action.payload) {
        curView = state.shows.reduce((acc: any, cur: any) => {
          return (acc = +cur.show.id === +action.payload ? cur : acc);
        }, {});
      }
      return { ...state, curView };
    default:
      return state;
  }
};
