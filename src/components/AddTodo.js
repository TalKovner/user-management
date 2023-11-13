import { useState } from "react";
import "../style/addTodo.css";

function AddTodo({ closeAddModal, createTodo, selectedUserId }) {
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="blackFrameTodo animate__animated animate__fadeIn content addTodo">
      Title:{" "}
      <input
        type="text"
        value={newTitle}
        placeholder="enter new Todo title"
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <button onClick={() => closeAddModal()}>Cancel</button>
      <button
        onClick={() => {
          createTodo(selectedUserId, newTitle);
          closeAddModal()
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
