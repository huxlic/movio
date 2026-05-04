const SearchForm = () => {
  return (
    <>
      <form action="" className="w-full">
        <label htmlFor="search"></label>
        <input
          className="bg-white w-full outline-0 border-0 py-2 px-4 text-sm placeholder:text-gray-400"
          type="text"
          id="search"
          placeholder="Find your next favorite watch..."
        />
      </form>
    </>
  );
};

export default SearchForm;
