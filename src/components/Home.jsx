import Navbar from "../commons/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import key from "../utils/key";
import Card from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../state/moviesReducer";
import { setURL } from "../state/urlReducer";

function Home() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageQuantity, setPageQuantity] = useState();
  const movies = useSelector((state) => state.movies);
  const url = useSelector((state) => state.url);
  useEffect(() => {
    if (movies.results === undefined) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
        )
        .then((res) => {
          dispatch(setMovies(res.data));
          dispatch(
            setURL(
              `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`
            )
          );
          setPageQuantity(res.data.total_pages);
        });
    } else {
      setPageQuantity(movies.total_pages);
    }
  }, [dispatch, movies.results, movies.total_pages]);

  useEffect(() => {
    setPage(1);
  }, [url]);

  const handleCounter = (type) => {
    switch (type) {
      case "increase":
        if (page < pageQuantity) setPage(page + 1);
        break;
      case "decrease":
        if (page > 1) setPage(page - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    axios.get(`${url}&page=${page}`).then((res) => {
      dispatch(setMovies(res.data));
    });
    setPageQuantity(movies.total_pages);
  }, [page, movies.total_pages, dispatch, url]);

  const handleSwitch = (name) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${name}/popular?api_key=${key}&language=en-US&page=1`
      )
      .then((res) => {
        dispatch(setMovies(res.data));
        dispatch(
          setURL(
            `https://api.themoviedb.org/3/${name}/popular?api_key=${key}&language=en-US`
          )
        );
        setPageQuantity(res.data.total_pages);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <button onClick={() => handleSwitch("movie")}>Movies</button>
        <button onClick={() => handleSwitch("tv")}>TV</button>
      </div>
      <div className="movies-body">
        {movies.results ? (
          movies.results.map((value, index) => {
            return <Card key={index} movie={value}></Card>;
          })
        ) : (
          <></>
        )}
      </div>
      <div className="page-button">
        <button onClick={() => handleCounter("decrease")}>-</button>
        <p>{page}</p>
        <button onClick={() => handleCounter("increase")}>+</button>
      </div>
    </div>
  );
}

export default Home;
