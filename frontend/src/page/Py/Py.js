import React from "react";
import Arrow from "../../components/Arrow/Arrow";

function Py() {
  return (
    <div className="homePanel">
      <div className="homeTitle">
        <div>
          <span>Python</span>
        </div>
      </div>
      <img src="/img/wave3.svg" alt="wave" />

      <div className="pagePanel">
        <div className="contentContainer orange"></div>
      </div>

      <Arrow />
    </div>
  );
}

export default Py;
