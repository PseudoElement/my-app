import React from "react";
import Counter from "./components/counter/Counter";
import Input from "./components/input/input";
import "./App.css";
import Post from "./components/post/post";
function App() {
  return (
    <div className="App">
      <Counter/>
      <Input/>
      <Post options={{type:'block1', id: 1, isDisabled: true}}/>
      <Post options={{type:'block2', id: 2, isDisabled: false}}/>
      <Post options={{type:'block3', id: 3, isDisabled: true}}/>
    </div>
  );
}
export default App;
