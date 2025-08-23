import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddGarment,
  weatherData,
  onRegisterClick,
  onLoginClick,
  onLogout,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="wtwr-logo" className="header__logo"></img>
      </Link>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />
      {currentUser ? (
        <>
          <button
            type="button"
            onClick={handleAddGarment}
            className="header__add-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">
                {currentUser.name || "Unknown User"}
              </p>
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar header__avatar_placeholder">
                  {currentUser.name[0].toUpperCase()}
                </div>
              )}
            </div>
          </Link>
          <button className="header__button" onClick={onLogout}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <button className="header__button" onClick={onRegisterClick}>
            Sign Up
          </button>
          <button className="header__button" onClick={onLoginClick}>
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
