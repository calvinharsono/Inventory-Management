import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import ItemForm from "./form/ItemForm";

const AddItem = () => {
  const navigate = useNavigate();
  const { addItem } = useContext(ItemContext);

  const handleOnSubmit = (item) => {
    addItem(item);
    navigate('/');
  };

  return (
    <div className="addForm">
      <ItemForm handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddItem;
