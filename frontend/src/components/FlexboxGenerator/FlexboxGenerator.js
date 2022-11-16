import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import "./FlexboxGenerator.scss";

function FlexboxGenerator() {
  const [display, setDisplay] = React.useState("flex");
  const [flexDirection, setFlexDirection] = React.useState("row");
  const [flexWrap, setFlexWrap] = React.useState("wrap");
  const [justifyContent, setJustifyContent] = React.useState("flex-start");
  const [alignItems, setAlignItems] = React.useState("flex-start");
  const [alignContent, setAlignContent] = React.useState("flex-start");

  const [box, setBox] = React.useState(1);
  const [board, setBoard] = React.useState([]);

  const addBoxHandler = () => {
    setBox((e) => e + 1);
  };

  React.useEffect(() => {
    setBoard(
      [...Array(box)].map(() => (
        <div
          key={Math.random()}
          style={{
            height: Math.random() * (200 - 50) + 50,
            background:
              "#" +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
          }}
        ></div>
      ))
    );
  }, [box]);

  return (
    <div className="flexBoxGenPanel">
      <div>
        <label>display:</label>
        <select onChange={(e) => setDisplay(e.target.value)}>
          <option value={"flex"}>flex</option>
          <option value={"inline-flex"}>inline-flex</option>
        </select>
      </div>

      <div>
        <label>flex-direction:</label>
        <select onChange={(e) => setFlexDirection(e.target.value)}>
          <option value={"row"}>row</option>
          <option value={"column"}>column</option>
          <option value={"row-reverse"}>row-reverse</option>
          <option value={"column-reverse"}>column-reverse</option>
        </select>
      </div>

      <div>
        <label>flex-wrap:</label>
        <select onChange={(e) => setFlexWrap(e.target.value)}>
          <option value={"wrap"}>wrap</option>
          <option value={"nowrap"}>nowrap</option>
          <option value={"wrap-revers"}>wrap-revers</option>
        </select>
      </div>

      <div>
        <label>justify-content:</label>
        <select onChange={(e) => setJustifyContent(e.target.value)}>
          <option value={"flex-start"}>flex-start</option>
          <option value={"flex-end"}>flex-end</option>
          <option value={"center"}>center</option>
          <option value={"space-between"}>space-between</option>
          <option value={"space-around"}>space-around</option>
        </select>
      </div>

      <div>
        <label>align-items:</label>
        <select onChange={(e) => setAlignItems(e.target.value)}>
          <option value={"flex-start"}>flex-start</option>
          <option value={"flex-end"}>flex-end</option>
          <option value={"center"}>center</option>
          <option value={"baseline"}>baseline</option>
          <option value={"stretch"}>stretch</option>
        </select>
      </div>

      <div>
        <label>align-content:</label>
        <select onChange={(e) => setAlignContent(e.target.value)}>
          <option value={"flex-start"}>flex-start</option>
          <option value={"flex-end"}>flex-end</option>
          <option value={"center"}>center</option>
          <option value={"space-between"}>space-between</option>
          <option value={"space-around"}>space-around</option>
          <option value={"stretch"}>stretch</option>
        </select>
      </div>

      <button onClick={addBoxHandler}>Add</button>

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
      <CodeBlock
        text={`display: ${display},\nflex-direction: ${flexDirection},\nflex-wrap: ${flexWrap},\njustify-content: ${justifyContent},\nalign-items: ${alignItems},\nalignc-content: ${alignContent},`}
        language={"css"}
        theme={dracula}
        codeBlock
      />
    </div>
  );
}

export default FlexboxGenerator;
