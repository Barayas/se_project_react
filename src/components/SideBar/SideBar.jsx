import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img
        src={currentUser?.avatar || avatar}
        alt="User Avatar"
        className="sidebar__avatar"
      />
      <p className="sidebar__username">{currentUser?.name || "Username"}</p>
    </div>
  );
}

export default SideBar;
