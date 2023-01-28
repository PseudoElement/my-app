import React from "react";
import { Navigation } from "../components/nav/Navigation";
import { useParams } from "react-router";
import { CustomLoader } from "../components/loaders/loader1";
import { usePosts } from "../utils/getPosts";

export function PostIdPage() {
  const { id } = useParams();///получить id поста
  const { loading, getPost } = usePosts();
  const [postContent, setPostContent] = React.useState({
    title: "",
    body: "",
    number: 0,
  });

  React.useEffect(() => {
    getPost(id).then((post) => {
      setPostContent({ title: post.title, body: post.body, number: post.id });
    });
  }, []);

  return (
    <>
      {loading && <CustomLoader />}
      <Navigation />
      <h1>Post № {postContent.number}</h1>
      <h1>Title: {postContent.title}</h1>
      <h2>Description: {postContent.body}</h2>
    </>
  );
}
