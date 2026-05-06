const getYear = (releaseDate) => {
  return releaseDate ? releaseDate.slice(0, 4) : "";
};

export default getYear;