import { useContext, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import { Context } from "../../context/Context";
import DetailedInfo from "./parts/DetailedInfo";

import "./styles/styles.scss";

export default function DetailedPage() {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const { dispatch, state } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/test-tv-shows");
    dispatch({ type: "CLEAR_VIEW" });
  };

  useEffect(() => {
    if (!state.shows) {
      dispatch({ type: "INPUT_QUERY", payload: name });
    }
    if (state.shows) {
      dispatch({ type: "VIEW_SHOW", payload: searchParams.get("id") });
    }
  }, [name, state.shows, dispatch, searchParams]);

  return (
    <div className='detailed-page'>
      <span className='link' onClick={handleNavigate}>
        <IoReturnUpBack cursor='pointer' size={36} />
      </span>
      {state.shows?.length === 0 && (
        <div className='message'>Sorry, nothing found with this search</div>
      )}
      {state.loader && <div className='message loader'>Please stand by</div>}
      {state.curView && <DetailedInfo />}
    </div>
  );
}
