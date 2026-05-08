import API_KEY from "./apiKey";

const APIs = {
  Today: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  "This Week": `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
};

export default APIs;
