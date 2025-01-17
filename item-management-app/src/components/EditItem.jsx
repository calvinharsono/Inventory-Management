import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import ItemForm from "./form/ItemForm";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, editItem } = useContext(ItemContext);
  const itemToEdit = items.find((item) => item.id === id);

  const handleOnSubmit = (updatedItem) => {
    editItem(id, updatedItem);
    navigate('/');
  };

  return (
    <div className="addForm">
      <ItemForm item={itemToEdit} handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditItem;
