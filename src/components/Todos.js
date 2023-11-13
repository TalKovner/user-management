import "../style/Todos.css";
import Todo from "./Todo";

function Todos({ todos, markComplete }) {
  return (
    <div className="blackFrameTodo animate__animated animate__fadeIn content">
      <span>Todos- User {todos[0].userId} </span>
      <button onClick={() => {}}>Add</button>

      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} markComplete={markComplete} />;
      })}
    </div>
  );
}

export default Todos;
