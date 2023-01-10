import React from "react";
import Counter from "./components/counter/Counter";
import Input from "./components/input/input";
import "./App.css";
import "./components/input/input.css";
import "./components/post/post.css"
import Post from "./components/post/post";
function App() {
  return (
    <div className="App">
      <Counter/>
      <Input/>
      <Post options={{type:'block1', id: 1}}/>
      <Post options={{type:'block2', id: 2}}/>
      <Post options={{type:'block3', id: 3}}/>
    </div>
  );
}
export default App;
