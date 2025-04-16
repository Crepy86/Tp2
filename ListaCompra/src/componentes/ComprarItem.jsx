import { useState } from "react";

function ComprarItem({ item, onToggle, onIncrease, onDecrease, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  const handleSave = () => {
    if (editedName.trim() !== "") {
      onEdit(item.id, editedName);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <span style={{ textDecoration: item.comprado ? "line-through" : "none" }}>
          {item.name}
        </span>
      )}

      <button onClick={() => onDecrease(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onIncrease(item.id)}>+</button>
      <button onClick={() => onDelete(item.id)}>🗑</button>
      <button onClick={() => onToggle(item.id)}>
        {item.comprado ? "✅" : "❌"}
      </button>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Editar</button>}
    </li>
  );
}

export default ComprarItem;
