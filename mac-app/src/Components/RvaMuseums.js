import {Card, Col, Container, Row} from "react-bootstrap";
import LoadingSpinner from "./Helpers/LoadingSpinner";
import {Link} from "react-router-dom";

function RvaMuseums(props) {

// ----------- Render page ---------------------------------------------------
return (
    <>
      <Container id={"museums-container"} hidden={!props.visible}>
        
        <Row id={"home-r1"}>
          <Col>
            <h1 id={"home-h1"} className={"mt-2"}>Richmond Virginia Museums</h1>
          </Col>
        </Row>
        <Row ><LoadingSpinner loading={props.loadingStatus.loading} /></Row>
        
        <Row xs={1} md={3} className="g-4">
          {props.museums.map((museum, idx) => (
              <Col className={"homeCol"}>
                <div>
                  <Card className={"museum-card shadow-sm p-3 mb-5 bg-body rounded-3"}
                        title={`Explore the ${museum.name}`}
                        onClick={() => {
                          props.setSelectedMuseumId(museum.museumId)
                          props.setShow({
                            rvaMuseums: false,
                            museum: true,
                            museumExhibits: false,
                            exhibitions: false
                          })
                        }}
                  >
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/card/${museum.smallPicture}`} />
                    <Card.Body>
                      <Card.Title className={"hTitle"}>{museum.name}</Card.Title>
                      <Card.Text className={"hText"}>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              
              </Col>
          ))}
        </Row>
        
      </Container>
    </>
)
}

export default RvaMuseums;