import Navbar from "./Navbar"
import SearchForm from "./SearchForm"

const Header = () => {
  return (
    <header className="bg-[#032541] w-full fixed top-0 left-0 h-max pb-1">
      <Navbar />
      <SearchForm />
    </header>
  );
}

export default Header