import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  // Determine if the current user has liked this item
  const isLiked = item.likes.some((id) => id === currentUser?._id);

  // Apply special CSS if liked
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_liked" : ""
  }`;

  // Handle clicking the like button
  const handleLike = () => {
    onCardLike(item); // Pass the item back up to App
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
            src={
              isLiked
                ? "./src/assets/liked-button.svg"
                : "./src/assets/like-button.svg"
            }
            alt="like-icon"
            className="card__like-icon"
          />
        </button>
      )}
    </li>
  );
}

export default ItemCard;
