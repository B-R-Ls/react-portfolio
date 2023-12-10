import "./App.css";
import { Link, Outlet } from "react-router-dom";

import NavLink from "./components/NavLink.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
export default App

function App() {

  return (
    <>
      <Navbar>
        <Container>
          <Link
            to={"/"}
          >
            <h1>Brendan Le</h1>
          </Link>
          <nav>
            <NavLink to={"/"}>About Me</NavLink>
            <NavLink to={`/portfolio`}>Portfolio</NavLink>
            <NavLink to={`/Contact`}>ContactMe</NavLink>
            <NavLink to={`/Resume`}>Resume</NavLink>
          </nav>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
      <footer>
        <div>Github</div>
        <div>LinkedIn</div>
        <div>Stack Overflow</div>
      </footer>
    </>
  );
}