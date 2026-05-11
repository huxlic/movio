import { useEffect, useState } from "react";
import Header from "../components/Header";
// import MovieCard from "../components/MovieCard";
import BiggerMovieCard from "../components/BiggerMovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`,
        );
        const popularMovies = await response.json();
        setMovies((prev) =>
          page === 1
            ? popularMovies.results
            : [...prev, ...popularMovies.results],
        );
        setTotalPages(popularMovies.total_pages);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovies();
  }, [page]);

  return (
    <>
      <Header />
      <section className="p-8">
        <h1 className="text-2xl font-bold items-center mb-4">Popular Movies</h1>

        <div className="grid grid-cols-5 gap-y-9 gap-x-6 w-full">
          {movies.map((movie, index) => {
            return <BiggerMovieCard key={index} {...movie} />
          })}
        </div>

        <div className="flex mt-6">
          <button
            onClick={() => setPage(page + 1)}
            className={`flex-1 bg-[#0B0B09] text-white rounded-2xl p-2 ${page === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            Load More
          </button>
        </div>
      </section>
    </>
  );
};

export default MoviesPage;
