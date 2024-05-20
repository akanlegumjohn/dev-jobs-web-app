import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Filter from "../components/Filter";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import NoResultsFound from "../components/NoResultsFound";

import JobCard from "../components/JobCard";

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

  useEffect(() => {
    // Fetch job data from API
    const devJobData = async () => {
      try {
        const response = await axios.get("/data.json");
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
      (titleRegex.test(job.company) || titleRegex.test(job.position)) &&
      locationRegex.test(job.location) &&
      (isFullTime ? job.contract === "Full Time" : true)
    );
  });

  let jobsTotalLength = data.length;

  const handleLoadMore = () => {
    // Increase the number of visible jobs and starting index
    setVisibleJobs(data.length);
    setJobStartingIndx(0);
  };

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
          <JobCard
            jobStartingIndx={jobStartingIndx}
            isDarkMode={isDarkMode}
            isLoading={isLoading}
            filteredJobs={filteredJobs}
            visibleJobs={visibleJobs}
          />
        </section>
        {visibleJobs !== jobsTotalLength &&
          filteredJobs.length >= visibleJobs && (
            <div className="flex items-center justify-center pb-10">
              <Button handleClick={handleLoadMore} content={"Load More"} />
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
