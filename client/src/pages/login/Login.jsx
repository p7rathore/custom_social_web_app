import React, { useRef, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const { user, isFecthing, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Custom Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Custom Social
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleSubmit} className="loginBox">
            <input
              className="loginInput"
              type="email"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              ref={password}
              required
              minLength={6}
            />
            <button type="submit" className="loginButton" disabled={isFecthing}>
              {isFecthing ? (
                <CircularProgress color="white" size={"30px"} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              type="button"
              className="loginRegisterButton"
              onClick={() => navigate("/register")}
            >
              {isFecthing ? (
                <CircularProgress color="white" size={"30px"} />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
