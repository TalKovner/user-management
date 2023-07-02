import "../style/UserCard.css"

function UserCard({ user }) {
  return (
    <div className="userCard">
      ID: {user.id} <br></br>
      Name: <input type="text" value={user.name}></input> <br></br>
      Email: <input type="text" value={user.email}></input> <br></br>
      <button>Other Data</button>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default UserCard;
