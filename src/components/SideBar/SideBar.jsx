import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function SideBar({ onEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img
        src={currentUser?.avatar || avatar}
        alt="User Avatar"
        className="sidebar__avatar"
      />
      <p className="sidebar__username">{currentUser?.name || "Username"}</p>
      <button
        className="sidebar__edit-button"
        onClick={() => {
          onEditProfile();
        }}
      >
        Change profile data
      </button>
      <button
        className="sidebar__signout-button"
        onClick={() => {
          onSignOut();
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default SideBar;
