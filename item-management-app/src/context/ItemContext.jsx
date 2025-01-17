import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const addItem = async (item) => {
    try {
      await axios.post("http://localhost:5000/items", item);
      setItems([item, ...items]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const editItem = async (id, updatedItem) => {
    try {
      await axios.put(`http://localhost:5000/items/${id}`, updatedItem);
      setItems(
        items.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (error) {
      console.error("Error editing item:", error);
    }
  };
  

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem, editItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
