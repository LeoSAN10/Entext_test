import React, { useContext, useEffect } from "react";
import "./styles.css";
import { ROUTES } from "../../Routes/routes";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useSetState } from "react-use";

export const LoginPage = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const { state: ContextState, login } = useContext(AuthContext);
  const { isLoginPending, isLoggedIn, loginError } = ContextState;

  const [state, setState] = useSetState(initialState);
  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem("user");

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate(ROUTES.MAIN_PAGE);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;
    login(username, password);
    setState({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <div className="login-form">
        <p className="login-form-header">Log In</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-container">
            <input
              value={state.username}
              onChange={(e) => setState({ username: e.target.value })}
              type="text"
              name="username"
              placeholder="Enter your name"
              required
              minLength={4}
            />
          </div>
          <div className="input-container">
            <input
              value={state.password}
              onChange={(e) => setState({ password: e.target.value })}
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={4}
            />
          </div>
          {isLoginPending && <div className="wait-message">Please wait...</div>}
          {isLoggedIn && <div>Success.</div>}
          {loginError && (
            <div className="error-message">{loginError.message}</div>
          )}
          <button type="submit" className="submit_btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
