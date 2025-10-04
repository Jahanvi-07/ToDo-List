import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, editTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks yet...</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
