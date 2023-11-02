import UserCard from "./UserCard";

function Users({
  users,
  isUserComplete,
  getUserTodos,
  getUserPosts,
  updateUser,
}) {
  return (
    <div>
      {users.map((user) => {
        return (
          <UserCard
            user={user}
            isCompleted={isUserComplete(user.id)}
            getUserTodos={getUserTodos}
            getUserPosts={getUserPosts}
            key={user.id}
            update={updateUser}
          />
        );
      })}
    </div>
  );
}

export default Users;
