import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

type ShowContext = {
  shows: any[] | null;
  query: string | null;
};

const initState: ShowContext = {
  shows: null,
  query: null,
};

export const Context = createContext<any>({});

export default function ContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
