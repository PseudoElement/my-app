import React from "react";
import { Select } from "../select/MySelect";
import "./post.css";
import { PostForm } from "./postForm";
import { compare } from "../../utils/sort";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "./postItem";
import { usePosts } from "../../utils/getPosts";
import { CustomLoader } from "../loaders/loader1";
import {
  Button,
  Input,
  Pagination,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { getPageCount } from "../../utils/getPagesCount";

function Post(props) {
  const { deleteFully, id } = props;
  const {
    posts,
    loading,
    setPosts,
    getPosts,
    totalPagesCount,
    limit,
    setLimit,
  } = usePosts();
  const [selectedSort, setSelectedSort] = React.useState("");
  const [choice, setChoice] = React.useState("");
  const inputRef = React.useRef();

  function createPost(newPost) {
    const arrId = posts.map((el) => el.id);
    setPosts([...posts, { ...newPost, id: Math.max.apply(null, arrId) + 1 }]);
  }
  function deletePost(e) {
    e.preventDefault();
    setPosts((prev) =>
      prev.filter((post) => post.id !== posts[posts.length - 1].id)
    );
  }

  ///--------------------------SORT-------------------------////
  function selectSort(sort) {
    setSelectedSort(sort);
  }

  function changeLimit() {
    const value = inputRef.current.querySelector(`input`).value;
    console.log(choice);
    setLimit(value);
  }

  React.useEffect(() => {
    setPosts([...posts].sort((a, b) => compare(a, b, selectedSort))); ///!!!!!!!!!!!!!!!!!!!!!!
  }, [selectedSort]); //////СНАЧАЛА ДЕСТРУКТУРИРОВАТЬ СТАРЫЙ МАССИВ, потом сортировать
  ///----------------------------------------------------------////

  return (
    <div className="post">
      <Select
        selectSort={selectSort}
        options={[
          { name: "By text", value: "body" },
          { name: "By title", value: "title" },
          { name: "By count", value: "id" },
        ]}
        defaultValue={"Sort"}
      />
      <Input
        ref={inputRef}
        style={{ maxWidth: 100 }}
        type="number"
        defaultValue={7}
        slotProps={{ input: { min: 1, max: 10, step: 1 } }}
      />
      <Button variant="outlined" color="success" onClick={changeLimit}>
        Change limit
      </Button>
      <RadioGroup>
        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={e=> setChoice(e.target.value)}/>
        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={e=> setChoice(e.target.value)}/>
      </RadioGroup>
      {loading && <CustomLoader />}

      <TransitionGroup>
        {posts.map((post) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem id={post.id} title={post.title} text={post.body} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>

      {posts && (
        <Pagination
          onChange={(e, page) => {
            getPosts(limit, page);
            const coordY = e.target.closest(".post").offsetTop;
            window.scrollTo(0, coordY);
          }}
          size="large"
          color="secondary"
          count={getPageCount(totalPagesCount, limit)}
        />
      )}

      <PostForm posts={posts} deletePost={deletePost} create={createPost} />

      <button className="deleteFully" onClick={() => deleteFully(id)}>
        DELETE WHOLE POST
      </button>
    </div>
  );
}
export default Post;
