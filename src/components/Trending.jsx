import { useState } from "react";
import MovieCard from "./MovieCard";
import APIs from "../data/trendingMoviesApi";
import movieGridBg from "../assets/images/movie-grid-bg.jpg";

const Trending = () => {
  const btn = ["Today", "This Week"];
  const [active, setActive] = useState(0);
  const [trendingMovies, setTrendingMovies] = useState([]);

  async function fetchTrending() {
    try {
      const response = await fetch(APIs[btn[active]]);
      const data = await response.json();
      return setTrendingMovies(data.results);

    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  fetchTrending();

  return (
    <>
      <section className="">
        <div className="flex gap-4 p-8 pb-4">
          <h3 className="text-2xl font-bold items-center">Trending</h3>
          <div className="border rounded-full border-[#032541] font">
            {btn.map((item, index) => (
              <button
                key={index}
                className={`h-full px-8 rounded-full text-[#032541] text-[.9rem] font-semibold transition-all ${active === index ? "bg-[#032541] text-white" : "hover:text-[#06477c]"}`}
                onClick={() => {
                  setActive(index);
                  fetchTrending();
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0)), url(${movieGridBg})`,
          }}
          className=" flex gap-6 overflow-x-auto py-4 bg-cover bg-center px-8"
        >
          {trendingMovies &&
            trendingMovies.map(({ id, poster_path, title, release_date }) => {
              return (
                <MovieCard key={id} {...{ poster_path, title, release_date, id }} />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Trending;
