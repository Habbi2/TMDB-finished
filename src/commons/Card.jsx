import { useNavigate } from "react-router-dom";

function Card({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div onClick={() => handleClick()}>
      <p>{movie.title}</p>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      ></img>
    </div>
  );
}

export default Card;
