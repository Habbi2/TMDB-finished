import axios from "axios";
import { useState } from "react";
import key from "../utils/key";
import { setMovies } from "../state/moviesReducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setURL } from "../state/urlReducer";

function Search() {
  const [state, setState] = useState("");
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const string = state;
    string.replace(" ", "+");
    const url = `https://api.themoviedb.org/3/search/movie?&query=${string.toLowerCase()}&api_key=${key}`;
    axios.get(url).then((res) => {
      dispatch(setMovies(res.data));
      dispatch(setURL(url));
      if (location !== "/") navigate("/");
    });
  };
  return (
    <div>
      <input onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => handleSubmit(e)}>Q</button>
    </div>
  );
}

export default Search;
