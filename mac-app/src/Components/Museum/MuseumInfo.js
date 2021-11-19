import { Col, Row, Button } from "react-bootstrap";

function MuseumInfo(props) {

  return (
      <div id={"museum-info-div"} hidden={!props.visible} >
          <Row className={"museum-r museum-r1 g-4"}>
            <Col>
              <h6>Museum Description</h6>
              <h6>Hours</h6>
              <h6>Location</h6>
              <Button variant={"outline-secondary"}
                      onClick={() => {
                        props.setShow({
                          rvaMuseums: false,
                          exhibitions: false,
                          museum: true,
                          museumExhibits: true
                        })
                      }}
                      title={`View the exhibitions at the ${props.museum.name}`}>
                View Exhibition Information for {props.museum.name}
              </Button>
            </Col>
          </Row>
      </div>
  )
  
}

export default MuseumInfo;