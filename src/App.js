
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


import './App.css';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">

      


      <BrowserRouter>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Outlet />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="//post/:id" element={<PostDetail />} />
          
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
