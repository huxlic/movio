import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailLoader = () => {
  return (
    <>
      <Skeleton
        count={2.5}
        height={16}
        width={600}
        borderRadius={20}
        baseColor="#1a1a1a"
        highlightColor="#2d2d2d"
      />
    </>
  );
};

export default DetailLoader;
