import "./ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ character }) {
  const { name, imageUrl, _id } = character;
  return (
    <Link to={`/find/${_id}`}>
      <div className="card_container">
        <h2 className="card_title">{name}</h2>
        <img className="card_image" src={imageUrl} alt="" />
      </div>
    </Link>
  );
}

export default ItemCard;
