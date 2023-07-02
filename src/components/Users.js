import UserCard from "./UserCard";

function Users({ users }) {
  return (
    <div>
      {users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </div>
  );
}

export default Users;
