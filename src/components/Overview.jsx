

const Overview = ({overview, tagline}) => {
  return (
    <div className="text-white text-[.8rem] font-normal py-4 flex flex-col gap-2 ">
      {tagline && (
        <span className="text-gray-400 text-[1rem] italic">{tagline}</span>
      )}
      <h2 className="text-[1.3rem] font-semibold underline ">Overview</h2>
      <p>{overview}</p>
    </div>
  );
}

export default Overview