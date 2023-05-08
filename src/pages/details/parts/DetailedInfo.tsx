import { useContext } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Context } from "../../../context/Context";

const NO_IMG = "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg";

function Info({ label, value }: { label: string; value: string | null }) {
  return (
    <>
      {value && (
        <div className='info'>
          <span className='label'>{label}:</span>
          <span className='value'>{value}</span>
        </div>
      )}
    </>
  );
}

export default function DetailedInfo() {
  const { state } = useContext(Context);
  const { image, name, genres, rating, url, status, schedule, summary } =
    state.curView.show;
  return (
    <div className='detailed-info'>
      <div className='img-container'>
        <img src={image?.original || NO_IMG} alt='No IMG' />
      </div>
      <div className='info-container'>
        <div>
          <h2 className='title'>{name}</h2>
          <Info label='Rating' value={rating.average} />
          <Info label='Genres' value={genres.join(", ")} />
          <Info label='Status' value={status} />
          <Info label='Time' value={schedule.time} />
          <Info label='Days' value={schedule.days.join(", ")} />
        </div>
        <div>
          {summary && (
            <div
              className='summary-value'
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          )}
          {url && (
            <a className='link' href={url}>
              <span>Watch</span>
              <IoEyeOutline size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
