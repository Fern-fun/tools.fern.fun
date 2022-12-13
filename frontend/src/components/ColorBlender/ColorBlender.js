import React from "react";
import "./ColorBlender.scss";

function ColorBlender(){
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
        let r = 0, g = 0, b = 0;
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
    }

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

        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;

        return "#" + r + g + b;
    }

    /**
     * Checks whether hex or rgb is specified. Call setRgbValue() and setSecondRgbValue() or setHexValue() and setSecondHexValue()
     * @param {string} color - #ffffff or rgb(255, 255, 255)
     * @param {string} num - 1 (first input) or 2 (second input)
     * @returns {void}
     */
    const InputsColor = (color, num) => {
        switch (num) {
            case '1':
                if(color.includes("#")){
                    setHexValue(color);
                    setRgbValue(hexToRgb(color));
                }else if(color.includes("rgb")){
                    setRgbValue(color);
                    setHexValue(rgbToHex(color));
                }
            break;
            case '2':
                if(color.includes("#")){
                    setSecondHexValue(color);
                    setSecondRgbValue(hexToRgb(color));
                }else if(color.includes("rgb")){
                    setSecondRgbValue(color);
                    setSecondHexValue(rgbToHex(color));
                }
                break;
            default: break;
        }
    }

    /**
     * Generates intermediate colors between the indicated colors
     * @returns {void}
     */
    const Blend = () => {
        let rgb = rgbValue.replace(/[^\d,]/g, '').split(',');
        let rgb2 = secondRgbValue.replace(/[^\d,]/g, '').split(',');
        
        let n = Number(midpoints) + 1; //! Give me types pls

        let rr = (Number(rgb2[0]) - Number(rgb[0])) / n; 
        let rg = (Number(rgb2[1]) - Number(rgb[1])) / n;
        let rb = (Number(rgb2[2]) - Number(rgb[2])) / n;

        let a = [];
        for (let i = 0; i <= n; i++) {
            let r = Number(rgb[0]) + (rr * i);
            let g = Number(rgb[1]) + (rg * i);
            let b = Number(rgb[2]) + (rb * i);
            
            //setBlend({ a: [...a, `rgb(${r}, ${g}, ${b})`] });
            a.push(`rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`);
        }
        console.log(a);

        setBlend([]); setBlendHex([]);

        for (let i = 0; i < a.length; i++) {
            setBlend((x) => [...x, a[i]]);
            setBlendHex((x) => [...x, rgbToHex(a[i])]);
        }
    }

    return (
        <>
            <div className="pagePanelTitle">
                <div id="title">
                    <span>Color Blender</span>
                </div>
                <div id="content">
                    <input
                      type="color"
                      value={hexValue}
                      onChange={(e) => InputsColor(e.target.value, '1')}
                      className="colorPicker"
                    />
                    <input
                      type="text"
                      maxLength="7"
                      value={hexValue}
                      onChange={(e) => InputsColor(e.target.value, '1')}
                      className="colorCode"
                    />
                    <input
                      type="text"
                      maxLength="19"
                      value={rgbValue}
                      onChange={(e) => InputsColor(e.target.value, '1')}
                      className="colorCode"
                    />
                    <br />
                    <input
                      type="color"
                      value={secondHexValue}
                      onChange={(e) => InputsColor(e.target.value, '2')}
                      className="colorPicker"
                    />
                    <input
                      type="text"
                      maxLength="7"
                      value={secondHexValue}
                      onChange={(e) => InputsColor(e.target.value, '2')}
                      className="colorCode"
                    />
                    <input
                      type="text"
                      maxLength="19"
                      value={secondRgbValue}
                      onChange={(e) => InputsColor(e.target.value, '2')}
                      className="colorCode"
                    /><br />
                    <input
                      type="text"
                      maxLength="1"
                      value={midpoints}
                      onChange={(e) => setMidpoints(e.target.value)}
                      className="midpointsNumber"
                    /><br></br>
                    <button className="blendButton" onClick={() => Blend(hexValue, secondHexValue)}>Blend</button>
                </div>
            </div>

            <div id="output">
                <div id="center colors">
                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[1]}}></div>
                        <span>{blendHex[1]} {blend[1]}</span>
                    </div>
                    
                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[1]}}></div>
                        <span>{blendHex[1]} {blend[1]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[2]}}></div>
                        <span>{blendHex[2]} {blend[2]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[3]}}></div>
                        <span>{blendHex[3]} {blend[3]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[4]}}></div>
                        <span>{blendHex[4]} {blend[4]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[5]}}></div>
                        <span>{blendHex[5]} {blend[5]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[6]}}></div>
                        <span>{blendHex[6]} {blend[6]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[7]}}></div>
                        <span>{blendHex[7]} {blend[7]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[8]}}></div>
                        <span>{blendHex[8]} {blend[8]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[9]}}></div>
                        <span>{blendHex[9]} {blend[9]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[10]}}></div>
                        <span>{blendHex[10]} {blend[10]}</span>
                    </div>

                    <div className="intermediateColor">
                        <div className="colorBox" style={{backgroundColor: blendHex[11]}}></div>
                        <span>{blendHex[11]} {blend[11]}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ColorBlender;