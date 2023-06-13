import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
const MySkeleton = () => {
  return (
    <SkeletonTheme baseColor=" #b1c8d3" highlightColor=" #ecebeb">
      <div className="relative w-350 h-228">
        <p>
          <Skeleton
            count={1}
            height={"50px"}
            width={"60px"}
            className="absolute ml-6 top-1"
          />
        </p>
        <p>
          <Skeleton count={4} height={"30px"} className="gap-2 " />
        </p>
      </div>
    </SkeletonTheme>
  );
};

export default MySkeleton;
