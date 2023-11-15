import { useState } from "react";
import "../style/addPost.css";

function AddPost({ closeAddModal, createPost, selectedUserId }) {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  return (
    <div className="blackFramePost animate__animated animate__fadeIn content addPost">
      Title:{" "}
      <input
        type="text"
        value={newTitle}
        placeholder="enter new Todo title"
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      /> <br></br>
      Body:{" "}
      <textarea
        value={newBody}
        placeholder="enter new Post body"
        onChange={(e) => {
          setNewBody(e.target.value);
        }}
      />
      <button onClick={() => closeAddModal()}>Cancel</button>
      <button
        onClick={() => {
          createPost(selectedUserId, newTitle, newBody);
          closeAddModal();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddPost;
