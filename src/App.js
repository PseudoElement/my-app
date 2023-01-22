import React from "react";
import Counter from "./components/counter/Counter";
import Input from "./components/input/input";
import "./App.css";
import "./components/input/input.css";
import "./components/post/post.css";
import Post from "./components/post/post";
import { Image } from "./components/image";
import { uuidv4 } from "./utils/UUID";
function App() {
  const [arrPosts, setArrPosts] = React.useState([
    <Post key={uuidv4()} deleteFully={deleteFully} id={uuidv4()} />,
    <Post key={uuidv4()} deleteFully={deleteFully} id={uuidv4()} />,
    <Post key={uuidv4()} deleteFully={deleteFully} id={uuidv4()} />,
  ]);
  function deleteFully(id) {
    setArrPosts((prev) => prev.filter((el) => el.props.id !== id));
  }
  React.useEffect(() => {
  }, [arrPosts]);
  return (
    <div className="App">
      <Counter />
      <Input />
      <br />
      <Image />
      {arrPosts.map((item) => item)}
    </div>
  );
}
export default App;
