import {Col, Row} from "react-bootstrap";

const Exhibit = (props) => {
  
  return (
      <>
        <Row>
          <Col md={5}>
          
          </Col>
          <Col md={7}>
            { props.exhibit }
          </Col>
        </Row>
      </>
  )
}

export default Exhibit