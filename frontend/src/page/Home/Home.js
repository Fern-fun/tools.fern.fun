import React from "react";
import JsonViewer from "../../components/JsonViewer/JsonViewer";
function Home() {
  return (
    <div>
      <JsonViewer json={[1, 2, 3, 4, 5, { a: "XD" }, [1, 2, 3, 4, 5]]} />
    </div>
  );
}

export default Home;
