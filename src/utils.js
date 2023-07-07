import axios from "axios";

export async function getUsers() {
  let resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return resp.data;
}

export async function getPosts() {
  let resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return resp.data;
}

export async function getTodos() {
  let resp = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
  return resp.data;
}

