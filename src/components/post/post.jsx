import React, { useState } from "react";
import { uuidv4 } from "../../utils/UUID";
import { Select } from "../select/MySelect";
import "./post.css";
import { PostForm } from "./postForm";
import { compare } from "../../utils/sort";
function Post(props) {
  const { deleteFully, id } = props;
  let [posts, setPosts] = useState([
    { text: "some Text for example", title: "first post", id: uuidv4() },
  ]);
  const [selectedSort, setSelectedSort] = React.useState("");
  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }
  function deletePost(e) {
    e.preventDefault();
    const idArr = posts.map(({ id }) => {
      return id;
    });
    setPosts((prev) =>
      prev.filter((post) => post.id !== posts[posts.length - 1].id)
    );
  }
  ///--------------------------SORT-------------------------////
  function selectSort(sort) {
    setSelectedSort(sort);
  }
  React.useEffect(() => {
    console.log(selectedSort);
    setPosts([...posts].sort((a, b) => compare(a, b, selectedSort))); ///!!!!!!!!!!!!!!!!!!!!!!
  }, [selectedSort]); //////СНАЧАЛА ДЕСТРУКТУРИРОВАТЬ СТАРЫЙ МАССИВ, потом сортировать
  ///----------------------------------------------------------////
  return (
    <div className="post">
      <Select
        selectSort={selectSort}
        options={[
          { name: "By text", value: "text" },
          { name: "By title", value: "title" },
        ]}
        defaultValue={"Sort"}
      />
      {posts.map((post, index) => {
        return (
          <div key={post.id} className="post_content">
            <div className="post_titile">{post?.title}</div>
            <div className="post_text">
              {index + 1}. {post.text}
            </div>
          </div>
        );
      })}
      <PostForm posts={posts} deletePost={deletePost} create={createPost} />
      <button className="deleteFully" onClick={() => deleteFully(id)}>
        DELETE WHOLE POST
      </button>
    </div>
  );
}
export default Post;
