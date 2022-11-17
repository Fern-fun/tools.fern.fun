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
        table += `      <th>${item.trim().replace(" ", "")}</th>\n`;
      });
      table += "  </tr>\n</table>";

      navigator.clipboard.writeText(table);
      setTable(table);
    } else {
      table += `      <th>${titles.trim().replace(" ", "")}</th>\n`;
      table += "  </tr>\n</table>";
      navigator.clipboard.writeText(table);
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
        <CodeBlock text={table} language={"html"} theme={dracula} codeBlock />
      </div>
    </>
  );
}

export default TableGenerator;
