import { useEffect, useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import { getPosts, getTodos, getUsers } from "./utils";
import Todos from "./components/Todos";
import 'animate.css';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const [searchUsers, setSearchUsers] = useState([]);
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    async function usersData() {
      const users = await getUsers();
      setUsers(users);
      setSearchUsers(users);
    }
    usersData();
  }, []);

  useEffect(() => {
    async function postsData() {
      const posts = await getPosts();
      setPosts(posts);
    }
    postsData();
  }, []);

  useEffect(() => {
    async function todosData() {
      const todos = await getTodos();
      setTodos(todos);
    }
    todosData();
  }, []);

  const isUserComplete = (userId) => {
    const userTodos = todos.filter((todo) => {
      return userId === todo.userId;
    });

    return userTodos.every((todo) => {
      return todo.completed;
    });
  };

  const search = (searchWord) => {
    const searchResult = users.filter((user) => {
      if (
        user.name.toLowerCase().includes(searchWord) ||
        user.email.toLowerCase().includes(searchWord)
      ) {
        return true;
      }
      return false;
    });
    setSearchUsers(searchResult);
  };

  const getUserTodos = (userId) => {
    const userTodos = todos.filter((todo) => {
      return todo.userId === userId;
    });
    setUserTodos(userTodos);
  };

  return (
    <div className="App">
      <Header search={search} />
      <div className="split">
        <Users
          users={searchUsers}
          isUserComplete={isUserComplete}
          getUserTodos={getUserTodos}
        />
        {userTodos.length && <Todos users={users} todos={userTodos} />}
      </div>
    </div>
  );
}

export default App;
