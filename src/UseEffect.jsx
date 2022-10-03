import { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";

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
    updatePostLoading(true);
    updateLoading(false);
    // updateIsError(false);
  };

  return (
    <>
      {isError && <h1>Something Went Wrong!</h1>}
      {/* {loading && <h1>Loading...</h1>} */}
      <form onSubmit={createPost}>
        <div className="m-3 row">
          <label className="col-sm-1 col-form-label">title: </label>
          <div className="col-sm-3">
            <input autoComplete="off" className="form-control" name="title" />
          </div>
        </div>
        <div className="m-3 row">
          <label className="col-sm-1 col-form-label">author: </label>
          <div className="col-sm-3">
            <input autoComplete="off" className="form-control" name="author" />
          </div>
        </div>
        <button className="btn btn-outline-primary m-3" type="submit">
          {loading ? <ImSpinner /> : "Create Post"}
        </button>
      </form>
      {postLoading && <h1>Posts Loading...</h1>}
      <pre className="m-3">{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
