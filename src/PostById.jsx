import { useNavigate, useParams } from "react-router-dom";

export default function PostById() {
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <div>ID of this post is {postId}</div>
    </>
  );
}
