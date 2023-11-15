import { useEffect, useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import { getPosts, getTodos, getUsers } from "./utils";
import Todos from "./components/Todos";
import "animate.css";
import Posts from "./components/Posts";
import { remove } from "lodash";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const [searchUsers, setSearchUsers] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState()

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

  const updateUser = (userId, data) => {
    let user = users.find((user) => {
      return user.id === userId;
    });

    user = { ...user, ...data };
    const duplicateUsers = [...users];
    remove(duplicateUsers, (user) => {
      return user.id === userId;
    });

    setUsers([...duplicateUsers, user]);
  };

  const markCompleted = (todoId) => {
    let todo = todos.find((todo) => {
      return todo.id === todoId;
    });
    todo.completed = true;
    const duplicateTodos = [...todos];
    remove(duplicateTodos, (todo) => {
      return todo.id === todoId;
    });

    setTodos([...duplicateTodos, todo]);
  };
  const getUserPosts = (userId) => {
    const userPosts = posts.filter((post) => {
      return post.userId === userId;
    });
    setUserPosts(userPosts);
  };

  const createTodo = (userId, title) => {
    const todo = {
      userId,
      title,
      completed: false,
      id: todos.length + 1,
    };
    setTodos([...todos, todo])
  };

  const createPost = (userId, title, body) => {
    const post = {
      userId,
      title,
      body,
      id: posts.length + 1,
    };
    setPosts([...posts, post])
  };

  return (
    <div className="App">
      <Header search={search} />
      <div className="split">
        <Users
          users={searchUsers}
          isUserComplete={isUserComplete}
          getUserTodos={getUserTodos}
          getUserPosts={getUserPosts}
          updateUser={updateUser}
          setCurrentUser={setSelectedUserId}
        />
        {userTodos.length && (
          <Todos todos={userTodos} markComplete={markCompleted} createTodo={createTodo} selectedUserId={selectedUserId} />
        )}
        {userPosts.length && <Posts posts={userPosts} createPost={createPost} selectedUserId={selectedUserId}/>}
      </div>
    </div>
  );
}

export default App;
