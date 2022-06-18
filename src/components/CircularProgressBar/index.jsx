import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ percentage }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textSize: "25px",
        textColor: "#fff",
        trailColor: "#EFEFEF",
        backgroundColor: "#0A9E01",
        pathColor: "#0A9E01",
      })}
    />
  );
};

export default CircularProgressBar;
