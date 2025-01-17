import { useNavigate } from "react-router-dom";

const Item = ({ item, handleRemoveItem }) => {
  const navigate = useNavigate();
  const { id, name, type, price, quantity } = item;

  return (
    <div className="item">
      <h2>{name}</h2>
      <div className="itemDetail">
        <p>Type: {type}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="buttons">
        <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        <button onClick={() => handleRemoveItem(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Item;
