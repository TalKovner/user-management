import "../style/todo.css";


function Todo({todo}) {
    return(
        <div className="todoFrame">
            {todo.userId}<br></br>
            Title: {todo.title} <br></br>
            Completed: {todo.completed.toString()}
            <button onClick={() => {}}>Mark Completed</button>
        </div>
    )
}

export default Todo