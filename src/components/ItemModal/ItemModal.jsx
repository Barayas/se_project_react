import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

function ItemModal({ isOpen, onClose, selectedCard, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  if (!isOpen || !selectedCard) return null;

  const isOwn = selectedCard.owner === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button type="button" onClick={onClose} className="modal__close">
          <img src="../../src/assets/close.svg" alt="close-icon" />
        </button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__header">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <button
            className={itemDeleteButtonClassName}
            type="button"
            onClick={() => onDelete(selectedCard)}
          >
            Delete item
          </button>
        </div>
        <p className="modal__weather">Weather: {selectedCard.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
