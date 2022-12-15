import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/Footer/Footer";
import TableGenerator from "../../components/TableGenerator/TableGenerator";

function Html() {
  return (
    <div className="homePanel solo">
      <Helmet>
        <title>Tools - HTML</title>
      </Helmet>
      <div className="homeTitle">
        <div>
          <span>HTML</span>
        </div>
      </div>
      <div className="wave">
        <img src="/img/wave1.svg" alt="wave" />
      </div>

      <div className="pagePanel">
        <div className="contentContainer blue">
          <TableGenerator />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Html;
