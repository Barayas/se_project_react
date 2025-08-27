import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import likeIcon from "../../assets/like-button.svg";
import likedIcon from "../../assets/liked-button.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_liked" : ""
  }`;

  const handleLike = () => {
    onCardLike(item);
  };

  return (
    <li className="card">
      <p className="card__title">{item.name}</p>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__img"
        onClick={() => onCardClick(item)}
      />
      {/* Show like button only if user is logged in */}
      {currentUser && (
        <button
          className={itemLikeButtonClassName}
          onClick={handleLike}
          type="button"
        >
          <img
            src={isLiked ? likedIcon : likeIcon}
            alt="like-icon"
            className="card__like-icon"
          />
        </button>
      )}
    </li>
  );
}

export default ItemCard;
