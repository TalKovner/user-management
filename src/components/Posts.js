import Post from "./Post";
import "../style/Todos.css";



function Posts({posts}) {
    return(
        <div className="blackFrame animate__animated animate__fadeIn content">
      <span>Posts- User {posts[0].userId} </span>
      <button onClick={() => {}}>Add</button>

      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
    )
}

export default Posts