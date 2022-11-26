import React from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

function Login({ token, setToken }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [errorText, setErrorText] = React.useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    fetch(`https://api.fern.fun/fern/account/get/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failure") {
          setErrorText("User not found");
        } else {
          bcrypt.compare(password, data.hash, function (err, res) {
            if (res === false) {
              setErrorText("Wrong password");
            } else {
              fetch(`https://api.fern.fun/fern/account/get/session/${username}`)
                .then((res) => res.json())
                .then((data) => {
                  localStorage.setItem("session", data.session.split("|")[0]);
                  localStorage.setItem("username", username);
                  setToken(data.session.split("|")[0]);
                  navigate("/");
                });
            }
          });
        }
      });
  };

  return (
    <div className="loginPanel">
      <div></div>
      <div className="loginPanelElement">
        <div className="loginPanelForm">
          <label>Username</label>
          <input
            name="username"
            type={"text"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="loginPanelForm">
          <label>Password</label>
          <input
            name="password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="loginPanelForm">
          <span id="error">{errorText}</span>
          <button onClick={loginHandler}>Login</button>
          <a id="login" href="/signup">
            Not on Tools yet? <a>Sign up</a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
