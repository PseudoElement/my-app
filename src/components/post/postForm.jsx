import React, { useState } from "react";

export function PostForm(props) {
  const [post, setPost] = useState({ text: "" });
  const [inputValue, setInputValue] = useState("");
  function addPost(e) {
    e.preventDefault();
    if(!inputValue) return;
    const newPost = {
      ...post,
      id: Date.now(),
    };
    props.create(newPost);
    setInputValue("");
  }
  function deletePost(e){
    e.preventDefault();
  }
  return (
    <form>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          setPost({ text: e.target.value });
        }}
        className="post_input"
        type="text"
        value={inputValue}
      />
      <div className="post_btns">
        <button onClick={(e) => addPost(e)}>Add</button>
        <button onClick={e=> deletePost(e)} style={{ background: props.id === 2 ? "green" : "red" }}>
          Delete
        </button>
      </div>
    </form>
  );
}
