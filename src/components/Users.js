import UserCard from "./UserCard";

function Users({ users, isUserComplete }) {
  return (
    <div>
      {users.map((user) => {
        return <UserCard user={user} isCompleted={isUserComplete(user.id)} key={user.id} />;
      })}
    </div>
  );
}

export default Users;
