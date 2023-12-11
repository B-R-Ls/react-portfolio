import Container from "react-bootstrap/Container";

const Resume = () => {
    return (
      <>
        <Container  className="bodyDiv">
          <h2>Resume</h2>
          <p>download my 
            <a>
              {' '}resume
            </a>
          </p>
          <h3>Front-End Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
          <h3>Back-End proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, sequalize</li>
            <li>MangoDB, mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>  
        </Container>
      </>
    );
  }
  
  export default Resume;