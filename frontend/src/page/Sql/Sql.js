import React from "react";
import Arrow from "../../components/Arrow/Arrow";

function Sql() {
  return (
    <div className="homePanel">
      <div className="homeTitle">
        <div>
          <span>MySQL</span>
        </div>
      </div>
      <img src="/img/wave4.svg" alt="wave" />

      <div className="pagePanel">
        <div className="contentContainer red"></div>
      </div>

      <Arrow />
    </div>
  );
}

export default Sql;
