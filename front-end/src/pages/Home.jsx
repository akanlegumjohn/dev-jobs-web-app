import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Filter from "../components/Filter";
import MySkeleton from "../components/Skeleton";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import NoResultsFound from "../components/NoResultsFound";
import { imageData } from "../../images";

export const Home = ({ toggleDarkMode, isDarkMode }) => {
  const [jobsData, setJobsData] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [jobStartingIndx, setJobStartingIndx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState({
    title: "",
    location: "",
    isFullTime: false,
  });

  const API_URI = "https://devjobs.up.railway.app/api/devjobs";

  useEffect(() => {
    // Fetch job data from API
    const devJobData = async () => {
      try {
        const response = await axios.get(API_URI);
        setJobsData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    devJobData();

    // Set loading state and clear timeout on component unmount
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      return clearTimeout(delay);
    };
  }, []);

  const handleLoadMore = () => {
    // Increase the number of visible jobs and starting index
    setVisibleJobs((prevVisibleItems) => prevVisibleItems + 12);
    setJobStartingIndx((prevJobStartingIndx) => prevJobStartingIndx + 12);
  };
  const handleGoBack = () => {
    // Decrease the number of visible jobs and starting index
    setVisibleJobs((prevVisibleItems) => prevVisibleItems - 12);
    setJobStartingIndx((prevJobStartingIndx) => prevJobStartingIndx - 12);
  };

  const data = jobsData?.data || [];

  const filteredJobs = data.filter((job) => {
    const { title, location } = filterData;
    // Initialize isFullTime from the state
    let { isFullTime } = filterData;
    const titleRegex = new RegExp(title, "gi");
    const locationRegex = new RegExp(location, "gi");

    // Check if contract is 'Full Time' and update isFullTime state
    if (job.contract === "Full Time") {
      isFullTime = true;
    }

    // Perform filtering based on title, location, and isFullTime
    return (
      titleRegex.test(job.company) ||
      (titleRegex.test(job.position) &&
        locationRegex.test(job.location) &&
        (isFullTime ? job.contract === "Full Time" : true))
    );
  });

  let jobsTotalLength = data.length;

  return !jobsData ? (
    <Loading />
  ) : (
    <main
      className={`${isDarkMode ? "bg-myMidnightColor" : "bg-myDayLightColor"}`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} />
      <section className={`relative z-10 mx-4 -mt-10 lg:mx-28 md:mx-12 `}>
        <Filter
          filterData={filterData}
          setFilterData={setFilterData}
          isDarkMode={isDarkMode}
        />
        <section className="grid py-16 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14">
          {filteredJobs
            .slice(jobStartingIndx, visibleJobs)
            .map((job, jobIdx) => {
              const logoBackground = job.logoBackground;
              const { position, postedAt, company, location, contract, logo } =
                job;

              return isLoading ? (
                // Skeleton component for loading state
                <MySkeleton key={jobIdx} isDarkMode={isDarkMode} />
              ) : (
                <div
                  key={jobIdx}
                  className={`relative flex flex-col gap-2 p-10 shadow-lg rounded-xl w-350 h-228 ${
                    isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
                  }`}
                >
                  <div
                    style={{ backgroundColor: logoBackground }}
                    className="absolute p-3 -top-6 rounded-xl"
                  >
                    {/* Render the logo image */}
                    {imageData.map((image, imgIndx) => {
                      console.log(image);
                      if (image.slice(-7) === logo.slice(-7)) {
                        return (
                          <img
                            key={imgIndx}
                            className="object-contain w-6 h-6 rounded-sm "
                            src={image}
                            alt={` The logo of ${job.company}`}
                          />
                        );
                      }
                    })}
                  </div>
                  <div className="flex gap-1 font-normal leading-5 text-myDarkGrayColor">
                    <p>{postedAt}</p> <p>.</p>
                    <p>{contract}</p>
                  </div>
                  <Link to={`/job/${job.id}`}>
                    <p
                      className={` text-lg font-bold leading-6 text-myVeryDarkBlueColor${
                        isDarkMode
                          ? "  text-white"
                          : " text-myVeryDarkBlueColor"
                      }`}
                    >
                      {position}
                    </p>
                  </Link>

                  <p className="text-base font-medium leading-5 text-myDarkGrayColor ">
                    {company}
                  </p>
                  <p className="pt-4 font-semibold leading-5 md:pt-8 text-myVioletColor">
                    {location}
                  </p>
                </div>
              );
            })}
        </section>

        {jobsData && filteredJobs.length !== 0 && (
          <div className="flex items-center justify-center pb-10">
            {visibleJobs < jobsTotalLength ? (
              <Button handleClick={handleLoadMore} content={"Load More"} />
            ) : (
              <Button handleClick={handleGoBack} content={"Go Back"} />
            )}
          </div>
        )}
        {filteredJobs.length === 0 && <NoResultsFound />}
      </section>
    </main>
  );
};
Home.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
