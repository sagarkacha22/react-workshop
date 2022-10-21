import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <>
      <ul>
        <li>
          <Link to="./1">First Post</Link>
        </li>
        <li>
          <Link to="./2">Second Post</Link>
        </li>
        <li>
          <Link to="./3">Third Post</Link>
        </li>
      </ul>
    </>
  );
}
