import { useNavigate } from "react-router-dom";

const NO_IMG = "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg";

export default function Card({ name, rating, img, id }: any) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${name}?id=${id}`);
  };
  return (
    <div className='card' onClick={handleNavigate}>
      {rating.average && <div className='card-rating'>{rating.average}</div>}
      <div className='card-img'>
        <img src={img?.medium || img?.original || NO_IMG} alt='No img :(' />
      </div>
      <div className='card-info'>
        <div>{name}</div>
      </div>
    </div>
  );
}
