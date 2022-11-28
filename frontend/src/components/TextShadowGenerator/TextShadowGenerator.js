import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function TextShadowGenerator() {
  const [horizontal, setHorizontal] = React.useState(1);
  const [vertical, setVertical] = React.useState(1);
  const [blur, setBlur] = React.useState(0);
  const [color, setColor] = useColor("hex", "#121212");

  const [code, setCode] = React.useState(
    `text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color.hex};`
  );

  React.useEffect(() => {
    setCode(
      `text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color.hex};`
    );
  }, [horizontal, vertical, blur]);
  return (
    <>
      <div className="pagePanelTitle">
        <div id="title">
          <span>Text Shadow Generator</span>
        </div>
        <div id="content">
          <div>
            <label>Horizontal: {horizontal}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="-100"
                max="100"
                value={horizontal}
                onChange={(e) => setHorizontal(e.target.value)}
                className="slider"
              />
            </div>
          </div>

          <div>
            <label>Vertical: {vertical}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="-100"
                max="100"
                value={vertical}
                onChange={(e) => setVertical(e.target.value)}
                className="slider"
              />
            </div>
          </div>

          <div>
            <label>Blur: {blur}</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="10"
                value={blur}
                onChange={(e) => setBlur(e.target.value)}
                className="slider"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="output">
        <div
          style={{
            minHeight: "200px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.8rem",
              textShadow: `${horizontal}px ${vertical}px ${blur}px ${color.hex}`,
            }}
          >
            Text shadow
          </span>
        </div>
        <div className="codePanel">
          <div id="copy">
            <button onClick={(e) => navigator.clipboard.writeText(code)}>
              Copy to clipboard
            </button>
          </div>
          <CodeBlock text={code} language={"css"} theme={dracula} codeBlock />
        </div>
      </div>
    </>
  );
}

export default TextShadowGenerator;
