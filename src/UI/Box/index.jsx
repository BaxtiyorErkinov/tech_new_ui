import React from "react";

import "./box.scss";

const Box = ({ children }) => {
  return <div className="box__container">{children}</div>;
};

export default Box;
