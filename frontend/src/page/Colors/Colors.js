import React from "react";
import { Helmet } from "react-helmet";
import ColorBlender from "../../components/ColorBlender/ColorBlender";

import Footer from "../../components/Footer/Footer";

function Colors() {
  return (
    <div className="homePanel solo">
      <Helmet>
        <title>Tools - Colors</title>
      </Helmet>
      <div className="homeTitle">
        <div>
          <span>Colors</span>
        </div>
      </div>
      <div className="wave">
        <img src="/img/wave3.svg" alt="wave" />
      </div>

      <div className="pagePanel">
        <div className="contentContainer orange">
          <ColorBlender />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Colors;
