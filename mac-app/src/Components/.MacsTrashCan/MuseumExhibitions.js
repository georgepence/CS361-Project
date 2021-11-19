// import { Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import Exhibit from "./Exhibitions/Exhibit";

const MuseumExhibitions = (props) => {
  console.log("In MuseumExhibitions, ", props)

  return (
      <>
        {/*<Row>*/}
        {/*  <Col md={5}>*/}
        {/*    <div>*/}
        {/*      {props.setSelectedMuseum ?*/}
        {/*          <a id={"mus-exh-link"}*/}
        {/*             onClick={() => props.setSelectedMuseum(props.museumId)}*/}
        {/*             href={{pathname: "/Museum_Old"}}>*/}
        
        {/*            {props.museum}*/}
        
        {/*          </a>*/}
        
        {/*          :*/}
        
        {/*          props.museum*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*  */}
        {/*  <Col md={7}>*/}
        {/*    <div>*/}
        
        {/*      {props.exhibitions.map((exhibition) => {*/}
        {/*        <p>{exhibition.name}</p>*/}
        {/*      })}*/}
        {/*      */}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </>
  )
}

export default MuseumExhibitions;