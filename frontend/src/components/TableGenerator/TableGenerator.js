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
      table += "    </tr>\n</table>";

      navigator.clipboard.writeText(table);
      setTable(table);
    }
  };

  return (
    <div>
      <label>Column Titles</label>
      <input
        type="text"
        placeholder="name, surrname, adress"
        onChange={(e) => setTitles(e.target.value)}
      />
      <button onClick={generateTable}>Generate</button>
      {table !== "" ? (
        <>
          <CodeBlock text={table} language={"html"} theme={dracula} codeBlock />
        </>
      ) : null}
    </div>
  );
}

export default TableGenerator;
