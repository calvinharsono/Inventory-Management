import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import Item from "./Item";

const ListItem = () => {
  const { items, removeItem } = useContext(ItemContext);

  return (
    <div className="listItem">
      {items.length ? (
        items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleRemoveItem={removeItem}
          />
        ))
      ) : (
        <p className="noData">No items available, Please add some items!</p>
      )}
    </div>
  );
};

export default ListItem;
