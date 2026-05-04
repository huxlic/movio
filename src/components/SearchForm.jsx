const SearchForm = () => {
  return (
    <>
      <form action="" className="w-full">
        <label htmlFor="search"></label>
        <input
          className="bg-white w-full outline-0 border-0 rounded py-2 px-4 text-sm"
          type="text"
          id="search"
          placeholder="Search..."
        />
      </form>
    </>
  );
};

export default SearchForm;
