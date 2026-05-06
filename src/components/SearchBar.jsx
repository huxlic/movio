
const SearchBar = () => {
  return (
    <form
      action=""
      className="w-full py-1 px-8 pr-1 flex bg-white outline-0 border-0 rounded-full"
    >
      <label htmlFor="search"></label>
      <input
        className="outline-0 w-full text-[.9rem] placeholder:text-gray-400"
        type="text"
        id="search"
        placeholder="Find your next favorite watch..."
      />
      <button className="rounded-full bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 px-6 py-2 font-semibold text-[#032541] shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02] hover:shadow-cyan-500/40">
        Search
      </button>
    </form>
  );
}

export default SearchBar