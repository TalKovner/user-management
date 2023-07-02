import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import { getPosts, getTodos, getUsers } from "./utils";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function usersData() {
      const users = await getUsers();
      setUsers(users);
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

  return (
    <div className="App">
      <Header />
      <Users users={users}/>
    </div>
  );
}

export default App;
