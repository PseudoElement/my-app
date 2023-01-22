// import axios from "axios";
import React, { useState } from "react";
import { usePosts } from "../../utils/getPosts";
// import { uuidv4 } from "../../utils/UUID";
import { CustomError } from "../errors/error1";

export function PostForm({ create, deletePost }) {
  const [post, setPost] = useState({ body: "", title: "" });
  const [textValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const {updatePosts, error } = usePosts();
  async function addPost(e) {
    e.preventDefault();
    if (!textValue || !titleValue) return;
    const newPost = {
      ...post
    };
    updatePosts(newPost).then((res) => create(res));
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
          setPost({ ...post, body: e.target.value });
        }}
        className="post_input"
        type="text"
        value={textValue}
      />
      {error && <CustomError errorText={error} />}
      <div className="post_btns">
        <button onClick={(e) => addPost(e)}>Add</button>
        <button onClick={(e) => deletePost(e)} style={{ background: "red" }}>
          Delete
        </button>
      </div>
    </form>
  );
}
