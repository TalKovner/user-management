import { useState } from "react";
import "../style/UserCard.css";
import OtherData from "./OtherData";

function UserCard({ user, isCompleted }) {
  const [isOtherData, setIsOtherData] = useState(false);

  return (
    <div className={`userCard ${isCompleted ? "greenFrame" : "redFrame"}`}>
      ID: {user.id} <br></br>
      Name: <input type="text" value={user.name} onChange={() => {}} />
      <br></br>
      Email: <input type="text" value={user.email} onChange={() => {}} />
      <br></br>
      <button
        onMouseEnter={() => setIsOtherData(true)}
        // onMouseLeave={() => setIsOtherData(false)}
      >
        Other Data
      </button>
      <button>Update</button>
      <button>Delete</button>
      {isOtherData && <OtherData address={user.address} close={() => setIsOtherData(false)}/>}
    </div>
  );
}

export default UserCard;
