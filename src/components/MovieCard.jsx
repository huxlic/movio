// import { Link } from "react-router";

import { Link } from "react-router";

const MovieCard = ({ poster_path, title, release_date }) => {
  return (
    <>
      <div className="w-max rounded-lg rounded-b-2xl transition-all">
        <Link className="flex w-37.5 aspect-2/3 bg-white rounded-lg shadow-2xl overflow-hidden transition-all hover:border hover:border-light-gray hover:scale-[1.01]">
          <img
            className="w-full block aspect-2/3"
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
            alt=""
          />
        </Link>
        <div className="text-black w-37.5 p-1 box-border flex flex-col">
          <Link className="leading-4 text-[.9rem] font-semibold mb-1.5 hover:text-[#18B9E3] hover:underline">
            {title}
          </Link>
          <span className="text-[.8rem] block">{release_date}</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
