import { useState } from "react";
import { Col, Row } from 'react-bootstrap'
import Exhibit from "./Exhibit";

const MuseumExhibitions = (props) => {
  
  return (
      <>
        <Row >
          <Col className={"museum-exhibitions"}
               md={5}
               title={`Click here to navigate to see information about the ${props.museum} (This is not 'live' yet)`}
          >
            {props.museum}
          </Col>
          <Col className={"museum-exhibitions"} md={7}>
            { props.exhibitions ? props.exhibitions[0].exhibition : '' }
          </Col>
        </Row>
        { props.exhibitions.length > 1 ? (
            props.exhibitions.slice(1).map((exhibit) => (
                <Exhibit exhibit={exhibit.exhibition}
                />
            ))) : ''
        }
      </>
  )
}

export default MuseumExhibitions;