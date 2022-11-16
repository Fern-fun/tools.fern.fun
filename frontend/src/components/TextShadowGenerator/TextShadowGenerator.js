import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function TextShadowGenerator() {
  const [horizontal, setHorizontal] = React.useState(0);
  const [vertical, setVertical] = React.useState(0);
  const [blur, setBlur] = React.useState(0);
  const [color, setColor] = useColor("hex", "#121212");

  return (
    <div>
      <div>
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
        <div>
          <ColorPicker
            width={250}
            height={150}
            color={color}
            onChange={setColor}
            hideHSV
            dark
          />
        </div>
      </div>
      <div>
        <span
          style={{
            textShadow: `${horizontal}px ${vertical}px ${blur}px ${color.hex}`,
          }}
        >
          Text shadow
        </span>
      </div>
      <CodeBlock
        text={`text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color.hex}`}
        language={"css"}
        theme={dracula}
        codeBlock
      />
    </div>
  );
}

export default TextShadowGenerator;
