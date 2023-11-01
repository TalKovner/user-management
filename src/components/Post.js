import "../style/post.css";


function Post({ post }) {
  return (
    <div className="todoFrame">
      {post.userId}
      <br></br>
      <span className="title">Title:</span> {post.title} <br></br>
      <span className="body">Body: </span>{post.body}
    </div>
  );
}

export default Post;
