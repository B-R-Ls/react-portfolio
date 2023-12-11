import Container from "react-bootstrap/Container";

const Contact = () => {
    return (
      <>
      <Container  className="bodyDiv">
        <form className="d-flex flex-column">
          <h2>Contact</h2>
          <h3>Name:</h3>
          <input className="smInput"></input>
          <h3>Email Address:</h3>
          <input className="smInput"></input>
          <h3>Message:</h3>
          <input id="message"></input>
          <button id="submit">Submit</button>
        </form>
      </Container>
      </>
    );
  }
  
  export default Contact;