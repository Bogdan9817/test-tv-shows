import { useContext } from "react";
import { Context } from "../../context/Context";
import Cardlist from "./parts/Cardlist";

import "./styles/styles.scss";

export default function MainPage() {
  const { state, dispatch } = useContext(Context);

  const handleSearch = (e: { target: { value: string } }) => {
    dispatch({ type: "INPUT_QUERY", payload: e.target.value });
  };

  return (
    <div className='main-wrapper'>
      <h1 className='heading'>Find your show</h1>
      <input className='search-input' onChange={handleSearch} />
      {state.query === null && (
        <div className='message'>Type the shows name </div>
      )}
      {state.shows?.length === 0 && (
        <div className='message'>Sorry, nothing found with this search</div>
      )}
      {state.error && <div className='message'>{state.error} </div>}
      {state.loader && <div className='message loader'>Please wait</div>}
      <div className={`cards-block ${state.loader ? "loading" : ""}`}>
        <Cardlist />
      </div>
    </div>
  );
}
