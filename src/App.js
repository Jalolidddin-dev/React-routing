import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
