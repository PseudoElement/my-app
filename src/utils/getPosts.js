import axios from "axios";
import React from "react";
export function usePosts() {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(7)
  const [totalPagesCount, setTotalPagesCount] = React.useState(0);
  const URL = "https://jsonplaceholder.typicode.com/posts";
  async function getPosts(limit = 10, page = 1) {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get(
        URL,
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      setTotalPagesCount(response.headers['x-total-count'])
      setPosts(response.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function updatePosts(newPost) {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        `${URL}?_limit=10`,
        newPost
      );
      return response.data;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function getPost(id){
    try{
      setError('');
      setLoading(true);
      const response = await fetch(`${URL}/${id}`);
      const post  = await response.json()
      return post;
    }catch(e){
      setError(e.message);
    }finally {
      setLoading(false);
    }
  }
 
  React.useEffect(() => {
    getPosts(limit, page);
  }, [limit, page]);
  return { posts, error, loading, setPosts, setError, setLoading, updatePosts, setPage, getPosts, totalPagesCount, limit, setLimit, getPost };
}
