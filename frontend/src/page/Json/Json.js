import React from "react";
import { Helmet } from "react-helmet";

import Arrow from "../../components/Arrow/Arrow";
import JsonViewer from "../../components/JsonViewer/JsonViewer";

function Json() {
  return (
    <div className="homePanel">
      <Helmet>
        <title>Tools - JSON</title>
      </Helmet>
      <div className="homeTitle">
        <div>
          <span>JSON</span>
        </div>
      </div>
      <div className="wave">
        <img src="/img/wave2.svg" alt="wave" />
      </div>

      <div className="pagePanel">
        <div className="contentContainer green">
          <JsonViewer />
        </div>
      </div>
    </div>
  );
}

export default Json;
