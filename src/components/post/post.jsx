import React, { useState } from "react";
function Post(props) {
  let { id, type } = props.options;
  let [postContents] = useState([
    { text: "Some text 1" },
    { text: "text 2" },
    { text: "text 3333" },
  ]);
  return (
    <div className="post">
        {postContents.map(string=>{
            return <div className="post_content">{string.text}</div>
        })}
      <div className="post_btns">
        <button style={{ background: id === 2 ? "green" : "red" }}>
          Delete
        </button>
        {type === "block1" ? <button>Submit</button> : null}
      </div>
    </div>
  );
}
export default Post;
