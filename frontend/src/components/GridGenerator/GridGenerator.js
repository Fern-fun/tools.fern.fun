import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import "./GridGenerator.scss";

function GridGenerator() {
  const [rows, setRows] = React.useState(2);
  const [columns, setColumns] = React.useState(2);

  const [columnGap, setColumnGap] = React.useState(0);
  const [rowGap, setRowGap] = React.useState(0);

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
            onChange={(e) => setColumns(e.target.value)}
            value={columns}
          />
          <label>Rows</label>
          <input
            type={"number"}
            name="rows"
            onChange={(e) => setRows(e.target.value)}
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
        <CodeBlock
          text={`grid-template-columns: repeat(${columns}, 1fr);\ngrid-template-rows: repeat(${rows}, 1fr);\ngrid-column-gap: ${columnGap}px;\ngrid-row-gap: ${rowGap}px;`}
          language={"css"}
          theme={dracula}
          codeBlock
        />
      </div>
    </>
  );
}

export default GridGenerator;
