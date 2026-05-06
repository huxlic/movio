import { useParams } from "react-router";
import { useState } from "react";
import API_KEY from "../data/apiKey";
import Header from "../components/Header";
import formatRuntime from "../helpers/formatRuntime";
import formatDate from "../helpers/formatDate";
import getYear from "../helpers/getYear";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const movieId = id.split("-")[0];

  async function fetchMovieDetails() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
      );
      const movie = await response.json();
      return setMovieDetails(movie);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
  fetchMovieDetails();

  return (
    <>
      <Header />
      <div className="w-full h-16 bg-[#032541] transition-all ease-in-out"></div>
      <div
        className={`w-full h-[80vh] bg-[url()] bg-cover bg-top flex gap-8 p-8`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://media.themoviedb.org/t/p/original${movieDetails.backdrop_path})`,
        }}
      >
        <div
          className="h-full w-75 aspect-2/3 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/original${movieDetails.poster_path})`,
          }}
        ></div>

        <div className="flex-1">
          <h2 className="text-white text-[35px] font-bold flex items-center ">
            {movieDetails.title}{" "}
            <span className="text-gray-400 font-normal text-lg ml-2">
              ({getYear(movieDetails.release_date)})
            </span>
          </h2>

          <div className="flex gap-7 text-[.9rem] text-white">
            <span className=" font-normal">
              {formatDate(movieDetails.release_date)} (
              {movieDetails.origin_country})
            </span>
            <ul className="flex gap-7 text-white list-disc">
              <li className="">
                {movieDetails.genres &&
                  movieDetails.genres.map((genre) => genre.name).join(" and ")}
              </li>
              <li className="">{formatRuntime(movieDetails.runtime)}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
