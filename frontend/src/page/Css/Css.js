import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/Footer/Footer";
import BorderRadiusGenerator from "../../components/BorderRadiusGenerator/BorderRadiusGenerator";
import FlexboxGenerator from "../../components/FlexboxGenerator/FlexboxGenerator";
import GridGenerator from "../../components/GridGenerator/GridGenerator";
import TextShadowGenerator from "../../components/TextShadowGenerator/TextShadowGenerator";

function Css() {
  return (
    <div className="homePanel">
      <Helmet>
        <title>Tools - CSS</title>
      </Helmet>
      <div className="homeTitle">
        <div>
          <span>CSS</span>
        </div>
      </div>

      <div className="wave">
        <img src="/img/wave2.svg" alt="wave" />
      </div>
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
        <Footer />
      </div>
    </div>
  );
}

export default Css;
