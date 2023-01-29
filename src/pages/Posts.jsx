import React from "react";
import Counter from "../components/counter/Counter";
import Input from "../components/input/input";
import "../components/input/input.css";
import "../components/post/post.css";
import Post from "../components/post/post";
import { Image } from "../components/image";
import { uuidv4 } from "../utils/UUID";
import { Navigation } from "../components/nav/Navigation";
import { useAuth } from "../context/AuthContext";

function Posts() {
  const { isAuth } = useAuth();
  const [arrPosts, setArrPosts] = React.useState([
    <Post key={uuidv4()} deleteFully={deleteFully} id={uuidv4()} />,
  ]);
  function deleteFully(id) {
    setArrPosts((prev) => prev.filter((el) => el.props.id !== id));
  }
  return (
    <div className="App">
      <Navigation />
      <Counter />
      <Input />
      <br />
      <Image />
      {arrPosts.map((item) => item)}
    </div>
  );
}
export default Posts;
