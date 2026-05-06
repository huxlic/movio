import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
      <div className="flex gap-6">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="shrink-0 w-37.5">
            <Skeleton height={225} width={150} />
            <Skeleton width={120} style={{ marginTop: 8 }} />
            <Skeleton width={80} />
          </div>
        ))}
      </div>
  );
};

export default Loader;
