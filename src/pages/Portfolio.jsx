import Container from "react-bootstrap/Container";

import {FaGithub} from "react-icons/fa"

const Portfolio = () => {
    return (
      <>
        <Container  className="bodyDiv">
          <h3>Portfolio</h3>
          <div className="d-flex flex-wrap justify-content-center">
            <div id="moneytype">
              <div className="d-flex projectText">
                <a className="overRide">
                <p>Money Type</p>              
                </a>
                <a href="https://github.com/pcrainer38/moneytype" className="overRide">
                <FaGithub/>              
                </a>
              </div>
            </div>
            <div id="Myworkout">
              <div className="d-flex">
                <a className="overRide">
                <p>My Workout</p>              
                </a>
                <a href="https://github.com/lindseycarlson23/my-workouts" className="overRide">
                <FaGithub/>              
                </a>                     
              </div>
            </div>
            <div id="DATE" className="d-flex"> 
              <a href="https://developing-a-text-editor-be3d59426d58.herokuapp.com/" className="overRide">
              <p>Developing A Text Editor</p>              
              </a>
              <a href="https://github.com/B-R-Ls/Developing-a-Text-Editor" className="overRide">
              <FaGithub/>              
              </a>            
            </div>
            <div id="ProfileManager" className="d-flex">
              <a href="https://github.com/B-R-Ls/Profile-Manager" className="overRide">
              <p>Profile Manager</p>              
              </a>
              <a href="https://github.com/B-R-Ls/Profile-Manager" className="overRide">
              <FaGithub/>              
              </a>
            </div>  
          </div>
        </Container>
      </>
    );
  }
  
  export default Portfolio;