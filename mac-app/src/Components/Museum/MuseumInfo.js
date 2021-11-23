import { Col, Row, Button } from "react-bootstrap";

function MuseumInfo(props) {

  return (
      <div id={"museum-info-div"} hidden={!props.visible} >
          <Row className={"museum-r museum-r1 g-4"}>
            <Col>
              <h6>{props.museum.description || 'Description goes here'}</h6>

              <Button variant={"outline-secondary"}
                      className={"mt-3"}
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