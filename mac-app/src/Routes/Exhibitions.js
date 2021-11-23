import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
// import { useEffect, useState } from "react";                 // Todo
// import LoadingSpinner from "../Components/LoadingSpinner";   // Todo
import MuseumExhibits from "../Components/Exhibitions/MuseumExhibits";

function Exhibitions(props) {
  // const [exhibitions, setExhibitions] = useState([]);    // TODO
  // const [museums, setMuseums] = useState([]);            // Todo
  
  // ----------- Render page --------------
  return (
      <>
        <Container >
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Exhibitions</Breadcrumb.Item>
          </Breadcrumb>
          <Button
              className={"mb-3 mt-1 mr-5 shadow"}
              variant="outline-primary"
              onClick={() => {alert("Not implemented - in Development!")}}
              title={"View exhibitions available at a future date"}
          >
            When will you be visiting?  Filter Exhibitions by date
          </Button>
          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Exhibitions</h1>
            </Col>
          </Row>
          
          <MuseumExhibits setSelectedMuseum={props.setSelectedMuseum} visible={true} />

        </Container>
      </>
  )
}

export default Exhibitions;