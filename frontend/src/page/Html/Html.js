import React from "react";
import Arrow from "../../components/Arrow/Arrow";
import TableGenerator from "../../components/TableGenerator/TableGenerator";

function Html() {
  return (
    <div className="homePanel">
      <div className="homeTitle">
        <div>
          <span>HTML</span>
        </div>
      </div>
      <img src="/img/wave1.svg" alt="wave" />

      <div className="pagePanel">
        <div className="contentContainer blue">
          <TableGenerator />
        </div>
      </div>

      <Arrow />
    </div>
  );
}

export default Html;
