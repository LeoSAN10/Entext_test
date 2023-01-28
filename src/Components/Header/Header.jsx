import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";
import { AuthContext } from "../../context/AuthContext";
import MediaQuerry from "react-responsive";
import { IoLogInOutline } from "react-icons/io5";
import "./styles.css";

export const Header = () => {
  const isUserLoggedIn = localStorage.getItem("user");
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(ROUTES.LOGIN_PAGE);
    }
  });

  const { logout } = useContext(AuthContext);

  const onLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="header">
      <div className="title">Lorem</div>
      <div className="user">
        <div className="username">{username}</div>
        <div>
          <MediaQuerry query="(min-device-width: 800px)">
            <button className="logout_btn" onClick={onLogout}>
              logout
            </button>
          </MediaQuerry>
          <MediaQuerry query="(max-device-width: 799px)">
            <button className="logout_btn" onClick={onLogout}>
              <IoLogInOutline />
            </button>
          </MediaQuerry>
        </div>
      </div>
    </div>
  );
};

export default Header;
