import { Row, Col } from 'react-bootstrap';

function Date(props){
  return (
      <>
        <Row className={'mt-1 border-1'}>
          <Col md={6}>
            <label htmlFor={props.id}
                   className="col-form-label" id={"date-label"}
            >
              {props.label}
            </label>
          </Col>
          <Col md={6}>
            <input
                name={props.name}
                id={props.id}
                className="form-control p-1"
                type="date"
                value={props.value}
                onChange={e=> props.setValue(e.target.value)}
            />
          </Col>
        </Row>


      </>
  )
}

export default Date;