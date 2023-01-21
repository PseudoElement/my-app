import React, { useState } from "react";
import { uuidv4 } from "../../utils/UUID";

export function PostForm({ create, deletePost }) {
  const [post, setPost] = useState({ text: "", title: "" });
  const [textValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  function addPost(e) {
    e.preventDefault();
    if (!textValue || !titleValue) return;
    const newPost = {
      ...post,
      id: uuidv4(),
    };
    create(newPost);
    setInputValue("");
    setTitleValue("");
  }
  return (
    <form>
      <input
        placeholder="...title"
        onChange={(e) => {
          setTitleValue(e.target.value);
          setPost({ ...post, title: e.target.value });
        }}
        type="text"
        value={titleValue}
        className="post_input"
      />
      <input
        placeholder="...text"
        onChange={(e) => {
          setInputValue(e.target.value);
          setPost({ ...post, text: e.target.value });
        }}
        className="post_input"
        type="text"
        value={textValue}
      />
      <div className="post_btns">
        <button onClick={(e) => addPost(e)}>Add</button>
        <button onClick={(e) => deletePost(e)} style={{ background: "red" }}>
          Delete
        </button>
      </div>
    </form>
  );
}
