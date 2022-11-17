import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };
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
        <Link to="/">
          <div>
            <img src="/img/home.svg" alt="home" />
            <span>Home</span>
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
