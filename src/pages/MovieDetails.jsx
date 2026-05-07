import { useParams } from "react-router";
import { useEffect, useState } from "react";
import API_KEY from "../data/apiKey";
import Header from "../components/Header";
import formatRuntime from "../helpers/formatRuntime";
import formatDate from "../helpers/formatDate";
import getYear from "../helpers/getYear";
import formatWords from "../helpers/formatWords";
import DetailLoader from "../components/DetailLoader";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieId = id.split("-")[0];

  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
        );

        const movie = await response.json();
        setMovieDetails(movie);
      } catch (error) {
        setLoading(true);
        console.error("Error fetching movie details:", error);
        setError("Failed to load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const words =
    movieDetails.genres && movieDetails.genres.map((genre) => genre.name);

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
        {loading || error ? (
          <DetailLoader />
        ) : (
          <>
            {" "}
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
                  <li className="">{formatWords(words)}</li>
                  <li className="">{formatRuntime(movieDetails.runtime)}</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
