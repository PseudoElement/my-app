import React, { useState } from "react";
import "./post.css";
import { PostForm } from "./postForm";
function Post(props) {
  const {id, type} = props.options
  let [posts, setPosts] = useState([{text: 'Some Text fo example', id: Date.now()}])
  function createPost(newPost){
    setPosts([...posts, newPost]);
  }
  React.useEffect(()=>{
    console.log(posts);
  }, [posts])
  return (
    <div className="post">
      {posts.map((post, index) => {
        return (
          <div className="post_content">
            {index + 1}. {post.text}
          </div>
        );
      })}
      <PostForm create={createPost} id={id} type={type}/>
    </div>
  );
}
export default Post;
