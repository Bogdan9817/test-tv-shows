import { useNavigate } from "react-router-dom";
import "./styles/styles.scss";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='error-page'>
      <div className='message'>Looks like such page doesn't exist</div>
      <span
        onClick={() => {
          navigate("/");
        }}
        className='navigate-link'
      >
        Go to home page
      </span>
    </div>
  );
}
