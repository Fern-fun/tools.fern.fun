import React from "react";
import Arrow from "../../components/Arrow/Arrow";
import FlexboxGenerator from "../../components/FlexboxGenerator/FlexboxGenerator";

function Css() {
  return (
    <div className="homePanel">
      <div className="homeTitle">
        <div>
          <span>Css</span>
        </div>
      </div>
      <img src="/img/wave2.svg" alt="wave" />

      <div className="pagePanel">
        <div className="contentContainer green">
          <FlexboxGenerator />
        </div>
      </div>

      <Arrow />
    </div>
  );
}

export default Css;
