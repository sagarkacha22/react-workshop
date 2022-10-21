import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Pricing from "./pages/Pricing";
import PostById from "./PostById";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostById />} />
      <Route path="*" element={<h2>Not Found!</h2>} />
    </Routes>
  );
}
