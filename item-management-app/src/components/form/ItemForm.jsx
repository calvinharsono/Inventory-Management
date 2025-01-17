import { useState, useEffect } from "react";

const ItemForm = ({ item, handleSubmit }) => {
  const [itemState, setItemState] = useState({
    id: item ? item.id : '',
    name: item ? item.name : '',
    type: item ? item.type : '',
    price: item ? item.price : '',
    quantity: item ? item.quantity : '',
  });

  useEffect(() => {
    if (item) {
      setItemState({
        id : item.id,
        name: item.name,
        type: item.type,
        price: item.price,
        quantity: item.quantity,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setItemState({
      ...itemState,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    handleSubmit({
      ...itemState,
      
      
    });
    if (!item) {
      setItemState({ id: '', name: '', type: '', price: '', quantity: '' });
    }
  };

  const renderInputField = (label, placeholder, name, type = "text") => (
    <div className="inputField">
      <label>{label}</label>
      <input
        value={itemState[name]}
        onChange={handleChange}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );

  const disabledSubmit = !itemState.id || !itemState.name || !itemState.type || !itemState.price || !itemState.quantity;

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField('Item ID', 'Enter ID of item...', 'id')}
      {renderInputField('Item Name', 'Enter name of item...', 'name')}
      {renderInputField('Item Type', 'Enter type of item...', 'type')}
      {renderInputField('Item Price', 'Enter price of item...', 'price')}
      {renderInputField('Item Quantity', 'Enter quantity of item...', 'quantity')}
      <button type="submit" className="btnForm" disabled={disabledSubmit}>
        {item ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default ItemForm;