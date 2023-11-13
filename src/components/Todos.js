import { useState } from "react";
import "../style/Todos.css";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function Todos({ todos, markComplete, createTodo, selectedUserId }) {
  const [showTodos, setShowTodos] = useState(true);

  const closeAddModal = () => {
    setShowTodos(true);
  };

  const todoList = (
    <div className="blackFrameTodo animate__animated animate__fadeIn content">
      <span>Todos- User {todos[0].userId} </span>
      <button
        onClick={() => {
          setShowTodos(false);
        }}
      >
        Add
      </button>

      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} markComplete={markComplete}/>;
      })}
    </div>
  );
  return showTodos ? todoList : <AddTodo closeAddModal={closeAddModal} createTodo={createTodo} selectedUserId={selectedUserId}/>;
}

export default Todos;
