const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const APIs = {
  Today: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  "This Week": `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
};

export default APIs;
