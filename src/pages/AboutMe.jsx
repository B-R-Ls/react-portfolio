import Container from "react-bootstrap/Container";

import picture from "../assets/Picture.jpg"

const AboutMe = () => {
  return (
    <Container className="bodyDiv">
      <h2>About Me</h2>
      <img src={picture} id="picture"></img>
      <div id="description">
        <p>
          I'm a 22 year old male who only recently joined the coding world. I learned
          everything I know from my college, the University of Texas Coding Bootcamp.
          With the knowledge I was given I plan to take this career by the horns and
          succeed. Although I may be new I'm a hard worker and fast learner.
        </p>
        <p>
          I'm currently proficent with coding languges such as HTML, CSS, JavaScript.
          With those languages, I can use them for both front-end and back-end developement.
          I acheive those goals with my knowledge on Node (And certain packages), 
          Databases (MySQL & MangoDB), CSS Frameworks (Bootstrap & Tailwind), and React.
        </p>        
      </div>
    </Container>
  );
}

export default AboutMe;