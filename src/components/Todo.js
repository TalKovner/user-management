import "../style/todo.css";

function Todo({ todo, markComplete }) {
  return (
    <div className="todoFrame">
      {todo.userId}
      <br></br>
      <span className="title">Title:</span> {todo.title} <br></br>
      <span className="completed">Completed:</span> {todo.completed.toString()}
      {!todo.completed && (
        <button onClick={() => markComplete(todo.id)}>Mark Completed</button>
      )}
    </div>
  );
}

export default Todo;
