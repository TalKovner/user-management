import "../style/todo.css";


function Todo({todo}) {
    return(
        <div className="todoFrame">
            {todo.userId}<br></br>
           <span className="title">Title:</span>  {todo.title} <br></br>
            <span className="completed">Completed:</span> {todo.completed.toString()}
            <button onClick={() => {}}>Mark Completed</button>
        </div>
    )
}

export default Todo