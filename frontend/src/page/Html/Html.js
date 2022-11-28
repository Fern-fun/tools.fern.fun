import React from "react";
import { Helmet } from "react-helmet";

import Arrow from "../../components/Arrow/Arrow";
import TableGenerator from "../../components/TableGenerator/TableGenerator";

function Html() {
  return (
    <div className="homePanel">
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
    </div>
  );
}

export default Html;