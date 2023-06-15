import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";

function FilterModal({ locationIcon, handleFilterInput, filterData }) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        dialogClassName="custom-modal"
        show={show}
        onHide={handleClose}
        className="absolute left-0 z-50 block py-6 ml-10 mr-4 shadow-xl right-6 top-40 md:hidden"
      >
        <Modal.Body className="flex flex-col bg-white ">
          <div className="relative flex items-center w-full pl-6 my-3">
            <div className="absolute left-6">
              <img src={locationIcon} alt="location icon" />
            </div>

            <input
              type="text"
              placeholder="Filter by location..."
              className="w-full py-2 text-sm border-none pl-9 md:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor "
              onChange={handleFilterInput}
              name="location"
              value={filterData.location}
            />
          </div>
          <div className="inline-flex items-center mb-4 px-7">
            <input
              type="checkbox"
              id="full-time-checkbox"
              className="w-4 h-8 border-none cursor-pointer form-checkbox"
              checked={filterData.isFullTime}
              onChange={handleFilterInput}
              name="isFullTime"
            />
            <label
              htmlFor="full-time-checkbox"
              className="ml-4 text-sm font-bold text-myVeryDarkBlueColor"
            >
              Full Time Only
            </label>
          </div>
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-semibold leading-6 tracking-wider text-white rounded-sm mx-7 bg-myVioletColor hover:bg-myLightVioletColor"
          >
            Search
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
FilterModal.propTypes = {
  locationIcon: PropTypes.string.isRequired,
  handleFilterInput: PropTypes.func.isRequired,
  filterData: PropTypes.shape({
    location: PropTypes.string.isRequired,
    isFullTime: PropTypes.string.isRequired,
  }).isRequired,
};
export default FilterModal;
