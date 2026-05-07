import MoviesPage from "../pages/MoviesPage";
import PeoplePage from "../pages/PeoplePage";
import TVShows from "../pages/TVShows";

const navLinks = [
  {
    text: "Movies",
    path: "/movie",
    element: MoviesPage,
  },
  {
    text: "TV Shows",
    path: "/tvshows",
    element: TVShows,
  },
  {
    text: "People",
    path: "/people",
    element: PeoplePage,
  },
];

export default navLinks;
