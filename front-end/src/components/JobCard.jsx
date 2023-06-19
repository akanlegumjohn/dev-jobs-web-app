import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import MySkeleton from "./Skeleton";
import { imageData } from "../../images";
import { containerVariants, logoVariants } from "../utils/Animations";

const JobCard = ({
  filteredJobs,
  isLoading,
  visibleJobs,
  isDarkMode,
  jobStartingIndx,
}) => {
  return (
    <>
      {filteredJobs.slice(jobStartingIndx, visibleJobs).map((job, jobIdx) => {
        const logoBackground = job.logoBackground;
        const { position, postedAt, company, location, contract } = job;

        return isLoading ? (
          // Skeleton component for loading state
          <MySkeleton key={jobIdx} isDarkMode={isDarkMode} />
        ) : (
          <Link to={`/job/${job.id}`} key={job.id}>
            <motion.div
              key={jobIdx}
              className={`relative flex flex-col gap-2 p-10 shadow-lg rounded-xl w-350 h-228 ${
                isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
              }`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div
                style={{ backgroundColor: logoBackground }}
                className="absolute p-3 -top-6 rounded-xl"
                variants={logoVariants}
              >
                {/* Render the logo image */}
                {imageData.map((image, imgIndx) => {
                  if (image.id === job.id) {
                    return (
                      <motion.img
                        key={imgIndx}
                        className="object-contain w-6 h-6 rounded-sm"
                        src={image.logoName}
                        alt={` The logo of ${job.company}`}
                        variants={logoVariants}
                      />
                    );
                  }
                })}
              </motion.div>
              <motion.div
                className="flex gap-1 font-normal leading-5 text-myDarkGrayColor"
                variants={containerVariants}
              >
                <p>{postedAt}</p> <p>.</p>
                <p>{contract}</p>
              </motion.div>
              <motion.p
                className={`hover:text-myDarkGrayColor text-lg font-bold leading-6 text-myVeryDarkBlueColor${
                  isDarkMode ? "  text-white" : " text-myVeryDarkBlueColor"
                }`}
                variants={containerVariants}
              >
                {position}
              </motion.p>
              <motion.p
                className="text-base font-medium leading-5 text-myDarkGrayColor"
                variants={containerVariants}
              >
                {company}
              </motion.p>
              <motion.p
                className="pt-4 font-semibold leading-5 md:pt-8 text-myVioletColor"
                variants={containerVariants}
              >
                {location}
              </motion.p>
            </motion.div>
          </Link>
        );
      })}
    </>
  );
};

JobCard.propTypes = {
  filteredJobs: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  visibleJobs: PropTypes.number,
  isDarkMode: PropTypes.bool,
  jobStartingIndx: PropTypes.number,
};

export default JobCard;
