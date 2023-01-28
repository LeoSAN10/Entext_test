import React from "react";
import { useSetState } from "react-use";

export const AuthContext = React.createContext(null);

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null,
};

export const ContextProvider = (props) => {
  const [state, setState] = useSetState(initialState);

  const setLoginPending = (isLoginPending) => setState({ isLoginPending });
  const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });
  const setLoginError = (loginError) => setState({ loginError });

  const login = (username, password) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    fetchLogin(username, password, (error) => {
      setLoginPending(false);

      if (!error) {
        setLoginSuccess(true);
      } else {
        setLoginError(error);
      }
    });
  };

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
    localStorage.setItem("user", "");
    localStorage.setItem("username", "");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const fetchLogin = (username, password, callback) =>
  setTimeout(() => {
    if (username === "admin" && password === "12345678") {
      localStorage.setItem("user", "loggedIn");
      localStorage.setItem("username", username);
      return callback(null);
    } else {
      localStorage.setItem("user", "");
      return callback(new Error("Wrong name or password. Please try again"));
    }
  }, 1000);
