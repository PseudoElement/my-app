import React from "react";
export function PostItem({id, text, title}) {
  return (
    <div className="post_content">
      <div className="post_titile">{title}</div>
      <div className="post_text">
        {id}. {text}
      </div>
    </div>
  );
}
