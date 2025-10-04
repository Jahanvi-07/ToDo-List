import React, { useState } from "react";

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
