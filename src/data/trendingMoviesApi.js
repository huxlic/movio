import API_KEY from "./apiKey";

const APIs = {
  Today: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  "This Week": `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
};

export default APIs;
