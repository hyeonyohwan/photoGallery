import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="title">
      <h1>Since 2018.</h1>
      <h2>
        <p className="mainText">Photos</p>
        <FontAwesomeIcon icon={faCamera} className="camera" />
      </h2>
    </div>
  );
};

export default Title;
