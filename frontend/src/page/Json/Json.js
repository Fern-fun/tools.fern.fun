import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/Footer/Footer";
import JsonViewer from "../../components/JsonViewer/JsonViewer";

function Json() {
  return (
    <div className="homePanel solo">
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

      <Footer />
    </div>
  );
}

export default Json;
