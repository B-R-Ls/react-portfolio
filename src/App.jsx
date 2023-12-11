import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";

import NavLink from "./components/NavLink.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


import {FaGithub} from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default App

function App() {

  return (
    <>
      <Navbar id="header">
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
        <Container>
          <nav className="d-flex justify-content-center">
            <NavLink to={`https://github.com/B-R-Ls`}>
              <FaGithub/>
            </NavLink>
            <NavLink to={`https://www.linkedin.com/in/brendan-le-1a87022a3/`}>
              <FaLinkedin/>
            </NavLink>
            <NavLink to={`https://stackoverflow.com/users/23078533/brendan`}>
              <FaStackOverflow/>
            </NavLink>
          </nav>
        </Container>
      </footer>
    </>
  );
}