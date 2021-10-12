import { Container, Row, Col, Card } from "react-bootstrap";
import {useEffect} from "react";

function Home() {
  
  
  // ----------- Get Museum information --------------
  
  function getMuseums() {
    async function fetchMuseums() {
      await fetch("http://flip3.engr.oregonstate.edu:17775")
          .then((response) => response.json())
          .then((data) => console.log("Millie!!", data))
          .catch((err) => console.log("Chico messed up", err))
          .finally(() => console.log("finally!"))
      
      // await fetch("http://flip3.engr.oregonstate.edu:17775")
      //     .then((response) => {
      //       response.json()
      //           .then((data) => console.log("Data here", data))
      //           .finally(() => console.log("Did it work??"))
      //     }, (err) => {
      //       console.log("Error!", err)
      //       console.log("Did it work??")
      //     })
      
    }
    testFetch().then(() => console.log("TestFetch Finished"));
  }
  
  useEffect(() => DogBreath(), []);
  
  // ----------- Render page --------------
  return (
      <>
        <Container >
          <Row>
          <h1 id={"home-h1"}>Richmond Virginia Museums</h1>
          </Row>
          <Row><p>I am a home page!!!</p></Row>
          
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            ))}
          </Row>
        </Container>
      </>
  )
}

export default Home;