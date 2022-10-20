import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
    </Routes>
  )
}