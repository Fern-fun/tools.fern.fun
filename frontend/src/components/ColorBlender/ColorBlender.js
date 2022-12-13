import React from "react";
import { HexColorPicker } from "react-colorful";

function ColorBlender() {
  const [hexValue, setHexValue] = React.useState("#000000");
  const [rgbValue, setRgbValue] = React.useState("rgb(0, 0, 0)");

  const [secondHexValue, setSecondHexValue] = React.useState("#000000");
  const [secondRgbValue, setSecondRgbValue] = React.useState("rgb(0, 0, 0)");

  const [midpoints, setMidpoints] = React.useState(1);

  const [blend, setBlend] = React.useState([]);
  const [blendHex, setBlendHex] = React.useState([]);

  /**
   * Hex to RGB?
   * @param  {string} hex - #ffffff
   * @return {string} - rgb(255, 255, 255)
   */
  const hexToRgb = (hex) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }
    return "rgb(" + +r + "," + +g + "," + +b + ")";
  };

  /**
   * RGB to Hex?
   * @param  {string} rgb - rgb(255, 255, 255)
   * @return {string} - #ffffff
   */
  const rgbToHex = (rgb) => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+parseInt(rgb[0])).toString(16),
      g = (+parseInt(rgb[1])).toString(16),
      b = (+parseInt(rgb[2])).toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return "#" + r + g + b;
  };

  /**
   * Checks whether hex or rgb is specified. Call setRgbValue() and setSecondRgbValue() or setHexValue() and setSecondHexValue()
   * @param {string} color - #ffffff or rgb(255, 255, 255)
   * @param {string} num - 1 (first input) or 2 (second input)
   * @returns {void}
   */
  const InputsColor = (color, num) => {
    switch (num) {
      case "1":
        if (color.includes("#")) {
          setHexValue(color);
          setRgbValue(hexToRgb(color));
        } else if (color.includes("rgb")) {
          setRgbValue(color);
          setHexValue(rgbToHex(color));
        }
        break;
      case "2":
        if (color.includes("#")) {
          setSecondHexValue(color);
          setSecondRgbValue(hexToRgb(color));
        } else if (color.includes("rgb")) {
          setSecondRgbValue(color);
          setSecondHexValue(rgbToHex(color));
        }
        break;
      default:
        break;
    }
  };

  /**
   * Generates intermediate colors between the indicated colors
   * @returns {void}
   */
  const Blend = () => {
    let rgb = rgbValue.replace(/[^\d,]/g, "").split(",");
    let rgb2 = secondRgbValue.replace(/[^\d,]/g, "").split(",");

    let n = Number(midpoints) + 4; //! Give me types pls @Skimper just use ts lol ;)

    let rr = (Number(rgb2[0]) - Number(rgb[0])) / n;
    let rg = (Number(rgb2[1]) - Number(rgb[1])) / n;
    let rb = (Number(rgb2[2]) - Number(rgb[2])) / n;

    let a = [];
    for (let i = 0; i <= n; i++) {
      let r = Number(rgb[0]) + rr * i;
      let g = Number(rgb[1]) + rg * i;
      let b = Number(rgb[2]) + rb * i;

      //setBlend({ a: [...a, `rgb(${r}, ${g}, ${b})`] });
      a.push(`rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`);
    }

    setBlend([]);
    setBlendHex([]);

    for (let i = 0; i < a.length; i++) {
      setBlend((x) => [...x, a[i]]);
      setBlendHex((x) => [...x, rgbToHex(a[i])]);
    }
  };

  const colorOneInput = (e) => {
    localStorage.setItem("color1", e);
    InputsColor(e, "1");
    Blend();
  };

  const colorTwoInput = (e) => {
    localStorage.setItem("color2", e);
    InputsColor(e, "2");
    Blend();
  };

  React.useEffect(() => {
    if (localStorage.getItem("color1") && localStorage.getItem("color2")) {
      setHexValue(localStorage.getItem("color1"));
      setSecondHexValue(localStorage.getItem("color2"));
      setRgbValue(hexToRgb(localStorage.getItem("color1")));
      setSecondRgbValue(hexToRgb(localStorage.getItem("color2")));
      let rgb = hexToRgb(localStorage.getItem("color1"))
        .replace(/[^\d,]/g, "")
        .split(",");
      let rgb2 = hexToRgb(localStorage.getItem("color2"))
        .replace(/[^\d,]/g, "")
        .split(",");

      let n = Number(midpoints) + 4; //! Give me types pls @Skimper just use ts lol ;)

      let rr = (Number(rgb2[0]) - Number(rgb[0])) / n;
      let rg = (Number(rgb2[1]) - Number(rgb[1])) / n;
      let rb = (Number(rgb2[2]) - Number(rgb[2])) / n;

      let a = [];
      for (let i = 0; i <= n; i++) {
        let r = Number(rgb[0]) + rr * i;
        let g = Number(rgb[1]) + rg * i;
        let b = Number(rgb[2]) + rb * i;

        //setBlend({ a: [...a, `rgb(${r}, ${g}, ${b})`] });
        a.push(`rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`);
      }

      setBlend([]);
      setBlendHex([]);

      for (let i = 0; i < a.length; i++) {
        setBlend((x) => [...x, a[i]]);
        setBlendHex((x) => [...x, rgbToHex(a[i])]);
      }
    } else {
      let color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      let color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setHexValue(color1);
      setSecondHexValue(color2);

      let rgb = hexToRgb(color1)
        .replace(/[^\d,]/g, "")
        .split(",");
      let rgb2 = hexToRgb(color2)
        .replace(/[^\d,]/g, "")
        .split(",");

      let n = Number(midpoints) + 4; //! Give me types pls @Skimper just use ts lol ;)

      let rr = (Number(rgb2[0]) - Number(rgb[0])) / n;
      let rg = (Number(rgb2[1]) - Number(rgb[1])) / n;
      let rb = (Number(rgb2[2]) - Number(rgb[2])) / n;

      let a = [];
      for (let i = 0; i <= n; i++) {
        let r = Number(rgb[0]) + rr * i;
        let g = Number(rgb[1]) + rg * i;
        let b = Number(rgb[2]) + rb * i;

        //setBlend({ a: [...a, `rgb(${r}, ${g}, ${b})`] });
        a.push(`rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`);
      }

      setBlend([]);
      setBlendHex([]);

      for (let i = 0; i < a.length; i++) {
        setBlend((x) => [...x, a[i]]);
        setBlendHex((x) => [...x, rgbToHex(a[i])]);
      }
    }
  }, []);

  return (
    <>
      <div className="pagePanelTitle">
        <div id="title">
          <span>Color Blender</span>
        </div>
        <div id="content">
          <div className="colorBlendContent">
            <div id="color">
              <label>
                Color 1 -{" "}
                <input
                  type={"text"}
                  id="inputText"
                  value={hexValue}
                  onChange={colorOneInput}
                />
              </label>
              <div className="colorBlendHexPicker">
                <HexColorPicker color={hexValue} onChange={colorOneInput} />
              </div>
            </div>

            <div id="color">
              <label>
                Color 2 -{" "}
                <input
                  type={"text"}
                  id="inputText"
                  value={secondHexValue}
                  onChange={colorOneInput}
                />
              </label>
              <div className="colorBlendHexPicker">
                <HexColorPicker
                  color={secondHexValue}
                  onChange={colorTwoInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="output">
        <div className="colorsOutput">
          {blendHex.map((color, index) => (
            <div className="colorBox" style={{ backgroundColor: color }}>
              {color}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ColorBlender;
