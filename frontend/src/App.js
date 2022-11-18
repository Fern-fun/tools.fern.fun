import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Css from "./page/Css/Css";

import Home from "./page/Home/Home";
import Html from "./page/Html/Html";
import Py from "./page/Py/Py";
import Sql from "./page/Sql/Sql";
import Json from "./page/Json/Json";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/py" element={<Py />} />

        <Route path="/json" element={<Json />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
