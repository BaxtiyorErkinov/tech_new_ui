//packages
import React from "react";

//icons
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

//styles
import "./searchModal.scss";

const SearchModal = ({ setActiveModalSearch }) => {
  return (
    <div className="search__modal-container">
      <span
        className="search__modal-closeBtn"
        onClick={() => setActiveModalSearch(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="search__modal-textField">
        <div className="search__modal-textField-item">
          <input type="text" placeholder="Type and hit Enter" />
          <HiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
