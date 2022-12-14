import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

function FlexboxGenerator() {
  const [display, setDisplay] = React.useState("flex");
  const [flexDirection, setFlexDirection] = React.useState("row");
  const [flexWrap, setFlexWrap] = React.useState("wrap");
  const [justifyContent, setJustifyContent] = React.useState("flex-start");
  const [alignItems, setAlignItems] = React.useState("flex-start");
  const [alignContent, setAlignContent] = React.useState("flex-start");
  const [flexCode, setFlexCode] = React.useState(
    `display: ${display};\nflex-direction: ${flexDirection};\nflex-wrap: ${flexWrap};\njustify-content: ${justifyContent};\nalign-items: ${alignItems};\nalign-content: ${alignContent};`
  );

  const [box, setBox] = React.useState(2);
  const [board, setBoard] = React.useState([]);

  const addBoxHandler = () => {
    if (box < 6) {
      setBox((e) => e + 1);
    }
  };

  const removeBoxHandler = () => {
    if (box > 1) {
      setBox((e) => e - 1);
    }
  };

  //! Box controller
  React.useEffect(() => {
    setBoard(
      [...Array(box)].map((i, a) => (
        <div
          key={Math.random()}
          style={{
            height: Math.random() * (200 - 50) + 50,
            background:
              "#" +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
          }}
        >
          {a + 1}
        </div>
      ))
    );
  }, [box]);

  //! Update code in code tag every change
  React.useEffect(() => {
    setFlexCode(
      `display: ${display};\nflex-direction: ${flexDirection};\nflex-wrap: ${flexWrap};\njustify-content: ${justifyContent};\nalign-items: ${alignItems};\nalign-content: ${alignContent};`
    );
  }, [
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
  ]);

  return (
    <>
      <div className="pagePanelTitle">
        <div>
          <div id="title">
            <span>Flexbox Generator</span>
          </div>
          <div id="content">
            <div>
              <label>Display:</label>
              <br />
              <select onChange={(e) => setDisplay(e.target.value)}>
                <option value={"flex"}>flex</option>
                <option value={"inline-flex"}>inline-flex</option>
              </select>
            </div>

            <div>
              <label>Flex-direction:</label>
              <br />
              <select onChange={(e) => setFlexDirection(e.target.value)}>
                <option value={"row"}>row</option>
                <option value={"column"}>column</option>
                <option value={"row-reverse"}>row-reverse</option>
                <option value={"column-reverse"}>column-reverse</option>
              </select>
            </div>

            <div>
              <label>Flex-wrap:</label>
              <br />
              <select onChange={(e) => setFlexWrap(e.target.value)}>
                <option value={"wrap"}>wrap</option>
                <option value={"nowrap"}>nowrap</option>
                <option value={"wrap-revers"}>wrap-revers</option>
              </select>
            </div>

            <div>
              <label>Justify-content:</label>
              <br />
              <select onChange={(e) => setJustifyContent(e.target.value)}>
                <option value={"flex-start"}>flex-start</option>
                <option value={"flex-end"}>flex-end</option>
                <option value={"center"}>center</option>
                <option value={"space-between"}>space-between</option>
                <option value={"space-around"}>space-around</option>
              </select>
            </div>

            <div>
              <label>Align-items:</label>
              <br />
              <select onChange={(e) => setAlignItems(e.target.value)}>
                <option value={"flex-start"}>flex-start</option>
                <option value={"flex-end"}>flex-end</option>
                <option value={"center"}>center</option>
                <option value={"baseline"}>baseline</option>
                <option value={"stretch"}>stretch</option>
              </select>
            </div>

            <div>
              <label>Align-content:</label>
              <br />
              <select onChange={(e) => setAlignContent(e.target.value)}>
                <option value={"flex-start"}>flex-start</option>
                <option value={"flex-end"}>flex-end</option>
                <option value={"center"}>center</option>
                <option value={"space-between"}>space-between</option>
                <option value={"space-around"}>space-around</option>
                <option value={"stretch"}>stretch</option>
              </select>
            </div>

            <div id="bnt">
              <button onClick={addBoxHandler}>Add</button>
              <button onClick={removeBoxHandler}>Remove</button>
            </div>
          </div>
        </div>
      </div>

      <div id="output">
        <div
          className="flexBoxGenBoard"
          style={{
            display: display,
            flexDirection: flexDirection,
            flexWrap: flexWrap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            alignContent: alignContent,
          }}
        >
          {board}
        </div>
        <div>
          <div className="codePanel">
            <div id="copy">
              <button onClick={(e) => navigator.clipboard.writeText(flexCode)}>
                Copy to clipboard
              </button>
            </div>
            <CodeBlock
              text={flexCode}
              language={"css"}
              theme={dracula}
              codeBlock
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FlexboxGenerator;
