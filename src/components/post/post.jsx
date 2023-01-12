import React, { useState } from "react";
import "./post.css";
function Post(props) {
  let { id, isDisabled } = props.options;
  let [postContents, setPosts] = useState([
    { text: "Some text 1", number: 1 },
    { text: "text 2", number: 2 },
    { text: "text 3333", number: 3 },
  ]);
  const [text, setText] = useState("Type here...");
  function addPost() {
    const newPost = { id: Date.now(), text };
    postContents = [...postContents, newPost];////с postContents.push(newPost) не работает 
    setPosts(postContents);
    setText('')
  }
  return (
    <div className="post">
      {postContents.map((post, index) => {
        return <div className="post_content">{index + 1}. {post.text}</div>;
      })}
      <input
        onChange={(e) => setText(e.target.value)}
        className="post_input"
        type="text"
        value={text}
      />
      <div className="post_btns">
        <button onClick={addPost}>Add</button>
        <button
          disabled={isDisabled ? true : false}
          style={{ background: id === 2 ? "green" : "red" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Post;
