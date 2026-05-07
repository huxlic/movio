import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailLoader = () => {
  return (
    <>
      <div className="w-full h-full flex gap-8">
        <Skeleton className="h-full"
        // height={420}
          width={300}
          baseColor="#1a1a1a"
          highlightColor="#2d2d2d"
          borderRadius={20}
        />
        <Skeleton
          count={2.5}
          height={16}
          width={600}
          borderRadius={20}
          baseColor="#1a1a1a"
          highlightColor="#2d2d2d"
        />
      </div>
    </>
  );
};

export default DetailLoader;
