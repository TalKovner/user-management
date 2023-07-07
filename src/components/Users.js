import UserCard from "./UserCard";

function Users({ users, isUserComplete, getUserTodos }) {
  return (
    <div>
      {users.map((user) => {
        return <UserCard user={user} isCompleted={isUserComplete(user.id)} getUserTodos={getUserTodos} key={user.id} />;
      })}
    </div>
  );
}

export default Users;
