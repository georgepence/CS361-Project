import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

function Home() {
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  const [museums, setMuseums] = useState([]);
  
  
  // ----------- Get Museum information --------------
  
  function getMuseums() {
    async function fetchMuseums() {
      setLoadingStatus({loading: true})
      await fetch("/api/museums")
          .then((response) => response.json())
          .then((data) => {setMuseums(data)})
          .catch((err) => {
            console.log("Error fetching Museums", err);
          })
          .finally(() => setLoadingStatus({loading: false}))
      
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
    fetchMuseums().then(() => console.log("TestFetch Finished"));
  }
  
  useEffect(() => getMuseums(), []);
  
  // ----------- Render page --------------
  return (
      <>
        <Container >
          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Richmond Virginia Museums</h1>
            </Col>
          </Row>
          <Row ><LoadingSpinner loading={loadingStatus.loading} /></Row>
          
          <Row xs={1} md={3} className="g-4">
            {museums.map((museum, idx) => (
                <Col>
                  <Card className={"museumCard shadow-sm p-3 mb-5 bg-body rounded-3"}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{museum.name}</Card.Title>
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