import React from "react";
import { useNavigate } from "react-router";

export function PostItem({id, text, title}) {
  const router = useNavigate();
  return (
    <div className="post_content">
      <div className="post_titile">{title}</div>
      <div className="post_text">
        {id}. {text}
      </div>
      <button onClick={e=> {
        e.preventDefault();
        router(`/posts/${id}`)
        }}>Open post</button>
    </div>
  );
}
