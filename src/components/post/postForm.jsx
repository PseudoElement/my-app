import React, { useState } from "react";
import { usePosts } from "../../utils/getPosts";
import { CustomError } from "../errors/error1";

export function PostForm({ create, deletePost }) {
  const [post, setPost] = useState({ body: "", title: "" });
  const [textValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const {updatePosts, error, setError, setLoading } = usePosts();
  async function addPost(e) {
    e.preventDefault();
    if (!textValue || !titleValue){
      setError('Fill all fields.')
      return;
    };
    const newPost = {
      ...post
    };
    setLoading(true);
   await updatePosts(newPost).then((res) => create(res));
    setInputValue("");
    setTitleValue("");
    setError("")
    setLoading(false);
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
