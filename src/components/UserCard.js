import { useState } from "react";
import "../style/UserCard.css";
import OtherData from "./OtherData";

function UserCard({ user, isCompleted, getUserTodos, getUserPosts, update, setCurrentUser }) {
  const [isOtherData, setIsOtherData] = useState(false);
  const [orangeRegion, setOrangeRegion] = useState(false);
  const [userData, setUserData] = useState(user);

  const clickId = () => {
    if (orangeRegion) {
      getUserTodos();
      getUserPosts();
    } else {
      getUserTodos(user.id);
      getUserPosts(user.id);
      setCurrentUser(user.id)
    }
    setOrangeRegion(!orangeRegion);
  };

  const updateAddress = (newAddress) => {
    setUserData({ ...userData, address: newAddress });
  };

  return (
    <div
      className={`userCard ${isCompleted ? "greenFrame" : "redFrame"} ${
        orangeRegion ? "colorRegion" : ""
      }`}
    >
      <span onClick={clickId} className="cursor">
        ID:
      </span>{" "}
      {user.id} <br></br>
      Name:{" "}
      <input
        type="text"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <br></br>
      Email:{" "}
      <input
        type="text"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <br></br>
      <button onMouseEnter={() => setIsOtherData(true)}>Other Data</button>
      <button onClick={() => update(user.id, userData)}>Update</button>
      <button>Delete</button>
      {isOtherData && (
        <OtherData address={userData.address} update={updateAddress} close={() => setIsOtherData(false)} />
      )}
    </div>
  );
}

export default UserCard;
