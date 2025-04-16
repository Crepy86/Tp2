import { useState } from "react";
import './App.css';
import AgregarItem from "./componentes/AgregarItem";
import ComprarItem from "./componentes/ComprarItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    const item = {
      id: Date.now(),
      name,
      quantity: 1,
      comprado: false,
    };
    setItems([...items, item]);
  };

  const togglecomprado = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, comprado: !item.comprado } : item
    ));
  };

  const increaseQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newName) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  return (
    <div>
      <h1>🛒Lista de Compras🛒</h1>
      <AgregarItem onAdd={addItem} />
      <ul>  
      {items
  .sort((a, b) => a.comprado - b.comprado) 
  .map(item => (
    <ComprarItem
      key={item.id}
      item={item}
      onToggle={togglecomprado}
      onIncrease={increaseQuantity}
      onDecrease={decreaseQuantity}
      onDelete={deleteItem}
      onEdit={editItem}
    />
))}
      </ul>
    </div>
  );
}

export default App;
