// import React from "react";
import logo from "../assets/icons/clapperboard.svg";
import { Link } from "react-router";
import navLinks from "../data/navLinks";
import search from "../assets/icons/search.svg";

const Navbar = () => {
  return (
    <header className="bg-[#032541] w-full fixed top-0 left-0 pb-2">
      <nav className="bg-[#032541] flex w-full items-center justify-between px-12 py-4">
        <a href="/" className="text-white text-2xl font-bold flex gap-1">
          Movio
          <img className="invert" src={logo} alt="Movio Logo" />
        </a>

        <div className="text-amber-50 flex gap-6">
          {navLinks.map((ele, i) => {
            return (
              <Link
                className="text-[.85rem] font-semibold hover:scale-[1.1]"
                key={i}
                to={ele.path}
              >
                {ele.text}
              </Link>
            );
          })}
        </div>

        <div>
          <button className="cursor-pointer">
            <img className="invert-100 w-4" src={search} alt="Search" />
          </button>
        </div>
      </nav>

      <form action="">
        <label htmlFor="search"></label>
        <input
          className="bg-white w-full outline-0 border-0 rounded py-2 px-4 text-sm"
          type="text"
          id="search"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};

export default Navbar;
