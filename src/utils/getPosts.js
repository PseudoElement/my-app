import axios from "axios";
import React from "react";
export function usePosts() {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState("");
  async function getPosts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setPosts(response.data);
    } catch (e) {
      setError(e.message);
    }finally{
        setLoading(false);
    }
  }
  async function updatePosts(newPost){
    try {
        setLoading(true);
        setError("");
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
          newPost
        );
        console.log(response.data)
        return response.data;
      } catch (e) {
        setError(e.message);
      }finally{
        setLoading(false);
      }
  }
  React.useEffect(() => {
    getPosts();
  }, []);
  return {posts, error, loading, setPosts, setError, setLoading, updatePosts}
}
