import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import loadShows from "../api/axios";

type ShowContext = {
  shows: any[] | null;
  query: string | null;
  loader: boolean;
  error: string | null;
  curView: any;
};

const initState: ShowContext = {
  shows: null,
  query: null,
  loader: false,
  error: null,
  curView: null,
};

export const Context = createContext<any>({});

let timer: NodeJS.Timeout;

export default function ContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleError = (err: string) => {
    dispatch({ type: "HANDLE_ERROR", payload: err });
  };
  useEffect(() => {
    const load = async () => {
      clearTimeout(timer);
      if (state.query.length < 2) {
        return dispatch({ type: "TRIGGER_LOADER", payload: false });
      }
      dispatch({ type: "TRIGGER_LOADER", payload: true });
      timer = setTimeout(async () => {
        const res = await loadShows(state.query, handleError);
        dispatch({ type: "LOAD_SHOWS", payload: res });
        dispatch({ type: "TRIGGER_LOADER", payload: false });
      }, 1000);
    };
    if (state.query) {
      load();
    }
  }, [state.query, dispatch]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
