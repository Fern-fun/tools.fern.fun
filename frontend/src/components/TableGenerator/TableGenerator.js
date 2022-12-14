import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

function TableGenerator() {
  const [titles, setTitles] = React.useState("");
  const [table, setTable] = React.useState("");

  const generateTable = () => {
    let table = "<table>\n  <tr>\n";
    if (titles.includes(",")) {
      const args = titles.split(",");
      args.forEach((item) => {
        table += `      <th>${item.trim()}</th>\n`;
      });
      table += "  </tr>\n</table>";

      setTable(table);
    } else {
      table += `      <th>${titles.trim()}</th>\n`;
      table += "  </tr>\n</table>";
      setTable(table);
    }
  };

  return (
    <>
      <div className="pagePanelTitle">
        <div>
          <div id="title">
            <span>Table generator</span>
          </div>

          <div id="content">
            <label>Column Titles</label>
            <div>
              <input
                type="text"
                placeholder="name, surrname, adress"
                onChange={(e) => setTitles(e.target.value)}
              />
              <br />
              <button onClick={generateTable}>Generate</button>
            </div>
          </div>
        </div>
      </div>

      <div id="output">
        <div className="codePanel">
          <div id="copy">
            <button onClick={(e) => navigator.clipboard.writeText(table)}>
              Copy to clipboard
            </button>
          </div>
          <CodeBlock text={table} language={"html"} theme={dracula} codeBlock />
        </div>
      </div>
    </>
  );
}

export default TableGenerator;
