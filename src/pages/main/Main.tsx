import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import loadShows from "../../api/axios";
import Cardlist from "./parts/Cardlist";
import "./styles/styles.scss";

let timer: NodeJS.Timeout;

export default function Main() {
  const { state, dispatch } = useContext(Context);
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const handleSearch = (e: { target: { value: string } }) => {
    dispatch({ type: "INPUT_QUERY", payload: e.target.value });
  };

  useEffect(() => {
    const load = async () => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        if (state.query.length > 2) {
          setLoad(true);
          const res = await loadShows(state.query, setError);
          dispatch({ type: "LOAD_SHOWS", payload: res });
          setLoad(false);
        }
      }, 1000);
    };
    if (state.query) {
      load();
    }
  }, [state.query, dispatch]);

  return (
    <div className='main-wrapper'>
      <input className='search-input' onChange={handleSearch} />
      {state.shows === null && (
        <div className='message'>Type the shows name' </div>
      )}
      {state.shows?.length === 0 && (
        <div className='message'>'Sorry, nothing found with this search' </div>
      )}
      {error && <div className='message'>{error} </div>}
      {load ? <div>Loading...</div> : <Cardlist />}
    </div>
  );
}
