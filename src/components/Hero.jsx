import heroImg from "../assets/images/cinematic.png";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[11  vh] bg-[#032541]"></div>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImg})`,
        }}
        className="w-full h-[50vh] bg-cover bg-center] flex flex-col gap-8 p-8 justify-center items-center"
      >
        <h2 className="text-white text-4xl font-bold text-center ">
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
