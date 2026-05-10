import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailLoader = () => {
  return (
    <>
      <div className="w-full h-full flex gap-8">
        <Skeleton
          className="h-full"
          width={300}
          baseColor="#1a1a1a"
          highlightColor="#2d2d2d"
          borderRadius={20}
        />
        <div className=" flex justify-between flex-col">
          <Skeleton
            count={2.5}
            height={16}
            width={600}
            borderRadius={20}
            baseColor="#1a1a1a"
            highlightColor="#2d2d2d"
          />

          <div className="">
            <Skeleton
              height={16}
              width={600}
              borderRadius={20}
              baseColor="#1a1a1a"
              highlightColor="#2d2d2d"
            />
            <Skeleton
              height={16}
              width={600}
              borderRadius={20}
              baseColor="#1a1a1a"
              highlightColor="#2d2d2d"
            />
            <Skeleton
              height={120}
              width={600}
              borderRadius={20}
              baseColor="#1a1a1a"
              highlightColor="#2d2d2d"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLoader;
