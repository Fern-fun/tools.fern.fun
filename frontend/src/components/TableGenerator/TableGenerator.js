import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import "./TableGenerator.scss";

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
    <div className="tableGenPanel">
      <div className="tableGenForm">
        <label>Column Titles</label>
        <diva>
          <input
            type="text"
            placeholder="name, surrname, adress"
            onChange={(e) => setTitles(e.target.value)}
          />
          <button onClick={generateTable}>Generate</button>
        </diva>
      </div>

      <div className="codeTag">
        <CodeBlock text={table} language={"html"} theme={dracula} codeBlock />
      </div>
    </div>
  );
}

export default TableGenerator;
