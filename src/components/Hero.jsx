import heroImg from "../assets/images/hero.jpg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
      {/* <div className="w-full h-[11vh] bg-[#032541]"></div> */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, .7)), url(${heroImg})`,
        }}
        className="w-full h-[60vh] bg-cover bg-top flex flex-col gap-8 px-16 justify-center items-center"
      >
        <h2 className="text-white text-5xl font-bold text-center leading-10 ">
          Explore the world of entertainment.{" "}
          <span className="text-[1.2rem] block font-semibold">
            Find movies, TV shows, and people worth watching.
          </span>
        </h2>
        <SearchBar/>
      </section>
    </>
  );
};

export default Hero;
