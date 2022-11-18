import React from "react";
import "./BorderRadiusGenerator.scss";
import { CodeBlock, dracula } from "react-code-blocks";

function BorderRadiusGenerator() {
  const [topLeft, setTopLeft] = React.useState(0);
  const [topRight, setTopRight] = React.useState(0);
  const [bottomLeft, setBottomLeft] = React.useState(0);
  const [bottomRight, setBottomRight] = React.useState(0);

  return (
    <>
      <div className="pagePanelTitle">
        <div id="title">
          <span>Border Radius Generator</span>
        </div>
        <div id="content">
          <div>
            <label>Top left: {topLeft}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="200"
                value={topLeft}
                onChange={(e) => setTopLeft(e.target.value)}
                className="slider"
              />
            </div>
          </div>

          <div>
            <label>Top right: {topRight}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="200"
                value={topRight}
                onChange={(e) => setTopRight(e.target.value)}
                className="slider"
              />
            </div>
          </div>

          <div>
            <label>Bottom left: {bottomLeft}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="200"
                value={bottomLeft}
                onChange={(e) => setBottomLeft(e.target.value)}
                className="slider"
              />
            </div>
          </div>

          <div>
            <label>Bottom right: {bottomRight}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="200"
                value={bottomRight}
                onChange={(e) => setBottomRight(e.target.value)}
                className="slider"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="output">
        <div id="center">
          <div
            className="borderRadiusGeneratorBox"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`,
            }}
          ></div>
        </div>

        <CodeBlock
          text={`border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`}
          language={"css"}
          theme={dracula}
          codeBlock
        />
      </div>
    </>
  );
}

export default BorderRadiusGenerator;
