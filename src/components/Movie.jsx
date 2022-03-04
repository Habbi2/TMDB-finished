import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "../utils/key";
import Navbar from "../commons/Navbar";

function Movie() {
  const { id } = useParams();
  const [state, setState] = useState({});
  console.log(state);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((res) => setState(res.data));
  }, [id]);
  return (
    <div>
      <Navbar></Navbar>
      {state.title ? (
        <div>
          <h1>{state.title}</h1>
          <img
            src={"https://image.tmdb.org/t/p/w500" + state.backdrop_path}
            alt=""
          />
          <h2>{state.overview}</h2>
          <h2>
            Genres: {state.genres.map((value, index) => value.name + " ")}
          </h2>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Movie;
