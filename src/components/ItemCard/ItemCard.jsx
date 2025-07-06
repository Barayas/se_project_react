import "./ItemCard.css";

function ItemCard({ item = {}, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__title">{item.name}</h2>
      <img
        onClick={handleCardClick}
        src={item.link}
        className="card__img"
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
