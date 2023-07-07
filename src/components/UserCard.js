import { useState } from "react";
import "../style/UserCard.css";
import OtherData from "./OtherData";

function UserCard({ user, isCompleted, getUserTodos }) {
  const [isOtherData, setIsOtherData] = useState(false);
  const [orangeRegion, setOrangeRegion] = useState(false);

  const clickId = () => {
    if (orangeRegion) {
      getUserTodos();
    } else {
      getUserTodos(user.id);
    }
    setOrangeRegion(!orangeRegion);
  };

  return (
    <div
      className={`userCard ${isCompleted ? "greenFrame" : "redFrame"} ${
        orangeRegion ? "colorRegion" : ""
      }`}
    >
      <span onClick={clickId} className="cursor">ID:</span> {user.id} <br></br>
      Name: <input type="text" value={user.name} onChange={() => {}} />
      <br></br>
      Email: <input type="text" value={user.email} onChange={() => {}} />
      <br></br>
      <button onMouseEnter={() => setIsOtherData(true)}>Other Data</button>
      <button>Update</button>
      <button>Delete</button>
      {isOtherData && (
        <OtherData address={user.address} close={() => setIsOtherData(false)} />
      )}
    </div>
  );
}

export default UserCard;
