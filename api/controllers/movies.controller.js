const key = require("../../src/utils/key");
const axios = require("axios");

const getAllMovies = (page = 1) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
    )
    .then((res) => res.data);
};

module.exports = getAllMovies;
