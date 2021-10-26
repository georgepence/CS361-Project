import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Home(props) {
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
                <Col className={"homeCol"}>
                  <Link to={{pathname:"/Museum"}}>
                    <Card className={"museumCard shadow-sm p-3 mb-5 bg-body rounded-3"} title={`Explore the ${museum.name}`}>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <Card.Title className={"hTitle"}>{museum.name}</Card.Title>
                        <Card.Text className={"hText"}>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>

                </Col>
            ))}
          </Row>
        </Container>
      </>
  )
}

export default Home;