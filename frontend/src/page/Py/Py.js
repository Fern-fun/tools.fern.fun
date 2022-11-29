import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/Footer/Footer";

function Py() {
  return (
    <div className="homePanel solo">
      <Helmet>
        <title>Tools - Python</title>
      </Helmet>
      <div className="homeTitle">
        <div>
          <span>Python</span>
        </div>
      </div>
      <div className="wave">
        <img src="/img/wave3.svg" alt="wave" />
      </div>

      <div className="pagePanel">
        <div className="contentContainer orange"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Py;
