import React, { useState, useEffect } from "react";
import noImage from "../images/no_image.jpeg";
import SearchMovies from "./SearchMovies";
import MovieModal from "./Modals/MovieModal";
import {
  AppDiv,
  Header,
  HrLine,
  Cards,
  Card,
  GridImage,
  MovieTitleMain,
  VotingAverage,
  Footer,
} from "./AppStyle";
const axios = require("axios");

const App = () => {
  const apikey = process.env.REACT_APP_MOVIE_DB_API_KEY;
  const baseUrl = process.env.REACT_APP_API_DOMAIN;
  const imageUrl = process.env.REACT_APP_API_BASE_IMAGE_URL;

  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [searchData, setSearchData] = useState(undefined);
  const [moviesData, setMoviesData] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieId, setMovieId] = useState("");
  let card = null;

  useEffect(() => {
    console.log("on load useeffect");
    async function fetchData() {
      try {
        const data = await axios.get(
          baseUrl +
            "/movie/now_playing?api_key=" +
            apikey +
            "&language=en-US&page=1"
        );
        setMoviesData(data.data.results);
        setSearchData(undefined);
        setSearchTerm("");
      } catch (e) {
        // setError(e);
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("search useEffect fired");
    async function fetchData() {
      try {
        const data = await axios.get(
          baseUrl +
            "/search/movie?query=" +
            searchTerm +
            "&api_key=" +
            apikey +
            "&language=en-US"
        );
        setSearchData(data.data.results);
        setLoading(false);
      } catch (e) {
        // setError(e);
        console.log(e);
      }
    }
    if (searchTerm) {
      console.log("searchTerm is set");
      fetchData();
    }
  }, [searchTerm]);

  const searchValue = async (value) => {
    if (value.length > 0) {
      setSearchTerm(value);
    } else {
      setSearchTerm("");
      setSearchData(undefined);
    }
  };

  const setModal = async (value) => {
    setShowModal(value);
  };

  const buildCard = (movie) => {
    return (
      <Card
        key={movie.id}
        onClick={() => {
          setMovieId(movie.id);
          setShowModal((prev) => !prev);
        }}
      >
        <VotingAverage>{movie.vote_average}</VotingAverage>
        <GridImage
          src={movie.poster_path ? imageUrl + movie.poster_path : noImage}
          alt="movie-poster"
        />
        <MovieTitleMain>{movie.title}</MovieTitleMain>
      </Card>
    );
  };

  if (searchTerm) {
    card =
      searchData &&
      searchData.map((character) => {
        return buildCard(character);
      });
  } else {
    card =
      moviesData &&
      moviesData.map((character) => {
        return buildCard(character);
      });
  }

  if (loading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
    //   } else if (error) {
    //     return (
    //       <div>
    //         <h2>Error</h2>
    //         <p>{error.message}</p>
    //       </div>
    //     );
  } else {
    return (
      <AppDiv>
        <Header>
          <SearchMovies searchValue={searchValue} />
        </Header>
        <HrLine />
        <div>
          <h2>
            {searchData
              ? "Searched Movies"
              : moviesData
              ? "Most Recent Movies"
              : null}
          </h2>
          <Cards>{card}</Cards>
        </div>
        <MovieModal
          movie={
            searchData
              ? searchData.filter((movie) => movie.id === movieId)[0]
              : moviesData
              ? moviesData.filter((movie) => movie.id === movieId)[0]
              : null
          }
          modal={showModal}
          setMovieModal={setModal}
        />
        <Footer></Footer>
      </AppDiv>
    );
  }
};

export default App;
