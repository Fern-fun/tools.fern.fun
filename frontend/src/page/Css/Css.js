import React from "react";
import Arrow from "../../components/Arrow/Arrow";
import BorderRadiusGenerator from "../../components/BorderRadiusGenerator/BorderRadiusGenerator";
import FlexboxGenerator from "../../components/FlexboxGenerator/FlexboxGenerator";
import GridGenerator from "../../components/GridGenerator/GridGenerator";
import TextShadowGenerator from "../../components/TextShadowGenerator/TextShadowGenerator";

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
        <div className="contentContainer red">
          <GridGenerator />
        </div>
        <div className="contentContainer orange">
          <TextShadowGenerator />
        </div>
        <div className="contentContainer blue">
          <BorderRadiusGenerator />
        </div>
      </div>

      <Arrow />
    </div>
  );
}

export default Css;
