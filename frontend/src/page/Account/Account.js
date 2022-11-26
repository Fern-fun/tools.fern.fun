import React from "react";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

function Account() {
  const username = localStorage.getItem("username");
  const [password, setPassword] = React.useState("");
  const [visable, setVisable] = React.useState(false);
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(
      `https://api.fern.fun/fern/account/get/user/data/${username}/${localStorage.getItem(
        "session"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.data.email);
      });
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("username");
    window.location.reload(false);
  };

  const deleteAccountHandler = () => {
    fetch(`https://api.fern.fun/fern/account/get/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failure") {
          setError("Wrong password");
        }
        bcrypt.compare(password, data.hash, function (err, res) {
          if (res === true) {
            fetch(
              `https://api.fern.fun/fern/account/delete/${username}/${localStorage.getItem(
                "session"
              )}`,
              {
                method: "delete",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.status === "success") {
                  localStorage.removeItem("session");
                  localStorage.removeItem("username");
                  navigate("/");
                  window.location.reload(false);
                } else {
                  setError("Something went wrong");
                }
              });
          }
        });
      });
  };

  return (
    <div className="accountPanel">
      <div></div>
      <div className="accountPanelTile">
        <div id="title">Hello 👋 {username}</div>
        <div id="personalDetail">
          <span>Email: {email}</span>
        </div>
        <div id="accountBnt">
          <button id="logout" onClick={logoutHandler}>
            Logout
          </button>
          <Modal
            visable={visable}
            title={"Are you sure?"}
            content={
              <>
                <span>
                  We can't recovery your account after this operation.
                  <span id="red"> You want to continue?</span>
                </span>
                <div>
                  <label>Passowrd: {error}</label>
                  <input
                    type="password"
                    placeholder="Passowrd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <button id="g-bnt" onClick={deleteAccountHandler}>
                    Yes
                  </button>
                  <button id="r-bnt" onClick={(e) => setVisable(false)}>
                    No
                  </button>
                </div>
              </>
            }
            setVisable={setVisable}
          />
          <button id="logout" onClick={(e) => setVisable((e) => !e)}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
