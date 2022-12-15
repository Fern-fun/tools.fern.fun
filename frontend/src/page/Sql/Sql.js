import React from "react";
import { Helmet } from "react-helmet";

function Sql() {
  return (
    <div className="homePanel">
      <Helmet>
        <title>Tools - MySQL</title>
      </Helmet>
      <div className="homeTitle">
        <div>
          <span>MySQL</span>
        </div>
      </div>
      <img src="/img/wave4.svg" alt="wave" />

      <div className="pagePanel">
        <div className="contentContainer red"></div>
      </div>
    </div>
  );
}

export default Sql;
