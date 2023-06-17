import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
const MySkeleton = ({ isDarkMode }) => {
  return (
    <SkeletonTheme
      baseColor={`${isDarkMode ? " #19202d" : "#D8D9D9"}`}
      highlightColor={`${isDarkMode ? " #6e8098" : "#ecebeb"}`}
    >
      <div className="relative ">
        <p>
          <Skeleton
            count={1}
            height={"40px"}
            width={"40px"}
            className="ml-6 -mb-2 "
          />
        </p>
        <p>
          <Skeleton count={4} height={"25px"} className="gap-0 " />
        </p>
      </div>
    </SkeletonTheme>
  );
};

export default MySkeleton;
