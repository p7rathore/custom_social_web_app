import React, { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
              type="text"
              ref={username}
              placeholder="Username"
              className="loginInput"
              required
            />
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="loginInput"
              required
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="loginInput"
              minLength={6}
              required
            />
            <input
              type="password"
              ref={passwordAgain}
              placeholder="Password Again"
              className="loginInput"
              minLength={6}
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button
              type="button"
              className="loginRegisterButton"
              onClick={() => navigate("/login")}
            >
              Login Into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
