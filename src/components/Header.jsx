import Margin from "./Margin";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="bg-[#032541] w-full fixed top-0 left-0 h-max pb-1 z-40">
        <Navbar />
      </header>
      <Margin />
    </>
  );
};

export default Header;
