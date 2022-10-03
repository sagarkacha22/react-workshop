import { useEffect, useState } from "react";

export default function UseEffect() {
  const [posts, setPosts] = useState([]);
  const [postLoading, updatePostLoading] = useState(true);
  const [isError, updateIsError] = useState(false);
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    if (!isError && !loading) {
      fetch("http://localhost:3004/posts")
        .then((res) => res.json())
        .then((body) => {
          setPosts(body);
          updatePostLoading(false);
        });
    }
  }, [isError, loading]);

  const createPost = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    try {
      updateLoading(true);
      updateIsError(false);
      const res = await fetch("http://localhost:3004/posts", {
        method: "POST",
        headers,
        body: JSON.stringify({ title, author }),
      });
      const data = res.json();
      console.log(data);
      e.target.reset();
    } catch (error) {
      console.error(error);
      updateIsError(true);
    }
    // updatePostLoading(true);
    updateLoading(false);
    // updateIsError(false);
  };

  return (
    <>
      {isError && <h1>Something Went Wrong!</h1>}
      {loading && <h1>Loading...</h1>}
      <form onSubmit={createPost}>
        <input name="title" />
        <input name="author" />
        <button type="submit">Create Post</button>
      </form>
      {postLoading && <h1>Posts Loading...</h1>}
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
