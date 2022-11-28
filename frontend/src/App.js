import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar/Navbar";
import Css from "./page/Css/Css";

import Home from "./page/Home/Home";
import Html from "./page/Html/Html";
import Py from "./page/Py/Py";
import Sql from "./page/Sql/Sql";
import Json from "./page/Json/Json";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import TermsofService from "./page/TermsofService/TermsofService";
import Account from "./page/Account/Account";
import CookiePolicy from "./page/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "./page/PrivacyPolicy/PrivacyPolicy";

function App() {
  const [token, setToken] = React.useState(localStorage.getItem("session"));

  if (!token) {
    return (
      <BrowserRouter>
        <Navbar />
        <Helmet>
          <title>Tools - Home</title>
        </Helmet>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route
            path="/signup"
            element={<Signup token={token} setToken={setToken} />}
          />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Helmet>
        <title>Tools - Home</title>
      </Helmet>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/py" element={<Py />} />

        <Route path="/json" element={<Json />} />

        <Route path="/account" element={<Account />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
