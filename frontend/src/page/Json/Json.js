import React from "react";
import Arrow from "../../components/Arrow/Arrow";
import JsonViewer from "../../components/JsonViewer/JsonViewer";

function Json() {
  return (
    <div className="homePanel">
      <div className="homeTitle">
        <div>
          <span>Json</span>
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

      <Arrow />
    </div>
  );
}

export default Json;
