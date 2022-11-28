import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import "./GridGenerator.scss";

function GridGenerator() {
  const [rows, setRows] = React.useState(2);
  const [columns, setColumns] = React.useState(2);

  const [columnGap, setColumnGap] = React.useState(0);
  const [rowGap, setRowGap] = React.useState(0);

  const [code, setCode] = React.useState(
    `grid-template-columns: repeat(${columns}, 1fr);\ngrid-template-rows: repeat(${rows}, 1fr);\ngrid-column-gap: ${columnGap}px;\ngrid-row-gap: ${rowGap}px;`
  );

  React.useEffect(() => {
    setCode(
      `grid-template-columns: repeat(${columns}, 1fr);\ngrid-template-rows: repeat(${rows}, 1fr);\ngrid-column-gap: ${columnGap}px;\ngrid-row-gap: ${rowGap}px;`
    );
  }, [rows, columns, columnGap, rowGap]);

  const columnHandler = (e) => {
    if (e.target.value <= 30) {
      setColumns(e.target.value);
    }
  };

  const rowHandler = (e) => {
    if (e.target.value <= 30) {
      setRows(e.target.value);
    }
  };

  return (
    <>
      <div className="pagePanelTitle">
        <div id="title">
          <span>Grid Generator</span>
        </div>
        <div id="content">
          <label>Columns</label>
          <input
            type={"number"}
            name="columns"
            onChange={columnHandler}
            value={columns}
          />
          <label>Rows</label>
          <input
            type={"number"}
            name="rows"
            onChange={rowHandler}
            value={rows}
          />

          <label>Column gap (in px)</label>
          <input
            type={"number"}
            name="rows"
            onChange={(e) => setColumnGap(e.target.value)}
            value={columnGap}
          />
          <label>Row gap (in px)</label>
          <input
            type={"number"}
            name="rows"
            onChange={(e) => setRowGap(e.target.value)}
            value={rowGap}
          />
        </div>
      </div>

      <div id="output">
        <div
          className="gridGenPanel"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridColumnGap: `${columnGap}px`,
            gridRowGap: `${rowGap}px`,
          }}
        >
          {[...Array(rows * columns)].map(() => (
            <div key={Math.random()}></div>
          ))}
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

export default GridGenerator;
