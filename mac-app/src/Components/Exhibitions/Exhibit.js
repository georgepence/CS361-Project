import { Row, Col } from 'react-bootstrap';

const Exhibit = (props) => {
  
  return (
      <>
        <Row>
          <Col md={8}>
            <p className={"m-1 exhibit-info"}>{props.exhibit}</p>
          </Col>
          <Col md={4}>
            <p className={"exhibit-info"} >
              {props.startDate ?
                props.startDate.slice(5,7) + '/' + props.startDate.slice(8, 10) +
                  '/' + props.startDate.slice(2, 4) +
                  ' - ' +
                  props.endDate.slice(5,7) + '/' + props.endDate.slice(8, 10) +
                  '/' + props.endDate.slice(2, 4)
                  :
                  `    On-going  `
              }
            </p>
          </Col>
        </Row>
      </>
  )
}

export default Exhibit