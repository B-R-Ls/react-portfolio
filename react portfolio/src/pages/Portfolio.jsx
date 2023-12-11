import Container from "react-bootstrap/Container";

import {FaGithub} from "react-icons/fa"

const Portfolio = () => {
    return (
      <>
        <Container  className="bodyDiv">
          <h3>Portfolio</h3>
          <div id="moneytype">
            <a>
            <p>Money Type</p>              
            </a>
            <a href="https://github.com/pcrainer38/moneytype">
            <FaGithub/>              
            </a>
          </div>
          <div id="Myworkout">
            <a>
            <p>My Workout</p>              
            </a>
            <a href="https://github.com/lindseycarlson23/my-workouts">
            <FaGithub/>              
            </a>            
          </div>
          <div id="DATE">
            <a href="https://developing-a-text-editor-be3d59426d58.herokuapp.com/">
            <p>Developing A Text Editor</p>              
            </a>
            <a href="https://github.com/B-R-Ls/Developing-a-Text-Editor">
            <FaGithub/>              
            </a>            
          </div>
          <div id="ProfileManager">
            <a href="https://github.com/B-R-Ls/Profile-Manager">
            <p>Profile Manager</p>              
            </a>
            <a href="https://github.com/B-R-Ls/Profile-Manager">
            <FaGithub/>              
            </a>
          </div>
        </Container>
      </>
    );
  }
  
  export default Portfolio;