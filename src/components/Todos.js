import "../style/Todos.css";
import Todo from "./Todo";

function Todos({ todos }) {
  return (
    <div className="blackFrameTodo animate__animated animate__fadeIn content">
      <span>Todos- User {todos[0].userId} </span>
      <button onClick={() => {}}>Add</button>

      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default Todos;
