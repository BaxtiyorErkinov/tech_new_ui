import React from "react";

//icons
import { BsCart4 } from "react-icons/bs";

//styles
import "./purchasedemos.scss";

const PurchaseDemos = () => {
  return (
    <div className="purchasedemos__container">
      <div className="items">
        <div className="item1">
          <span className="count">25+</span>
          <span className="text">DEMOS</span>
        </div>
        <div className="item2">
          <span className="icon">
            <BsCart4 />
          </span>
          <span className="text">BUY NOW!</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDemos;
