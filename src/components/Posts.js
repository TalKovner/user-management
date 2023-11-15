import Post from "./Post";
import "../style/Todos.css";
import { useState } from "react";
import AddPost from "./AddPost";

function Posts({ posts, createPost, selectedUserId }) {
  const [showPosts, setShowPosts] = useState(true);

  const closeAddModal = () => {
    setShowPosts(true);
  };

  return showPosts ? (
    <div className="blackFrame animate__animated animate__fadeIn content">
      <span>Posts- User {posts[0].userId} </span>
      <button
        onClick={() => {
          setShowPosts(false);
        }}
      >
        Add
      </button>

      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  ) : (
    <AddPost
      closeAddModal={closeAddModal}
      createPost={createPost}
      selectedUserId={selectedUserId}
    />
  );
}

export default Posts;
