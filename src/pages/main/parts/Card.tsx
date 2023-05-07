import { useNavigate } from "react-router-dom";

const NO_IMG = "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg";

export default function Card({ name, rating, img, id }: any) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${id}`);
  };
  return (
    <div className='card' onClick={handleNavigate}>
      <div className='card-img'>
        <img src={img?.medium || img?.original} alt={NO_IMG} />
      </div>
      <div className='card-info'>
        <div>{name}</div>
        <div>{rating.average}</div>
      </div>
    </div>
  );
}
