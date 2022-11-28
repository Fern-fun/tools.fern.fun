import React from "react";
import { Link } from "react-router-dom";

function Navbar({ token, setToken }) {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  if (token) {
    fetch(
      `https://api.fern.fun/fern/account/check/session/${token}/${localStorage.getItem(
        "username"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failure") {
          localStorage.removeItem("session");
          localStorage.removeItem("username");
          window.location.reload(false);
        }
      });
  }

  return (
    <div className="navbar">
      <div className="logo">{/* <img src="" alt="logo" /> */}</div>
      <button
        className={
          "hamburger hamburger--spin" + (hamburger ? " is-active" : "")
        }
        type="button"
        onClick={hamburgerHandler}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="nav" style={hamburger ? { display: "block" } : null}>
        <Link
          to="/"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div>
            <img src="/img/home.svg" alt="home" />
            <span>Home</span>
          </div>
        </Link>

        <Link
          to="/account"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div>
            <img src="/img/account.svg" alt="account" />
            <span>Account</span>
          </div>
        </Link>

        {/* <Link to="/api">
          <div>
            <img src="/img/home.svg" alt="api" />
            <span>API</span>
          </div>
        </Link>

        <Link to="/todo">
          <div>
            <img src="/img/home.svg" alt="todo" />
            <span>TODO</span>
          </div>
        </Link>

        <Link to="/cpv">
          <div>
            <img src="/img/home.svg" alt="cpv" />
            <span>CPV</span>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
