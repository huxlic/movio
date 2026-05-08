
import { useContext } from "react";
import { Link } from "react-router";
import { MediaTypeContext } from "../hooks/GlobalContext";

const MovieCard = ({ poster_path, title, release_date, id, media_type }) => {

  const {setMediaType} = useContext(MediaTypeContext);

  const handleClick = () => {
    setMediaType(media_type);
  };


  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };


  const formattedTitle = title.toLowerCase().split(" ").join("-");
  
  return (
    <>
      <div className="w-max rounded-lg rounded-b-2xl transition-all">
        <Link
          to={`/movie/${id}-${formattedTitle}`}
          className="flex w-37.5 aspect-2/3 bg-white rounded-lg shadow-2xl overflow-hidden transition-all hover:border hover:border-light-gray hover:scale-[1.01]"
          onClick={handleClick}
        >
          <img
            className="w-full block aspect-2/3"
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
            alt=""
          />
        </Link>
        <div className="text-black w-37.5 p-1 box-border flex flex-col">
          <Link
            to={`/movie/${id}-${formattedTitle}`}
            className="leading-4 text-[.9rem] font-semibold mb-1.5 hover:text-[#18B9E3] hover:underline"
          >
            {title}
          </Link>
          <span className="text-[.8rem] block">{formatDate(release_date)}</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
