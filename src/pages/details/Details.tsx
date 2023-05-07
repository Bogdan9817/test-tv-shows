import { useParams } from "react-router-dom";

export default function Details() {
  const { showId } = useParams();
  console.log(showId);

  return (
    <div className='details-page'>
      <div className='details-container'></div>
    </div>
  );
}
