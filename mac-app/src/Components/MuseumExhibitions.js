import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Exhibit from "./Exhibit";

const MuseumExhibitions = (props) => {

  return (
      <>
        <Row key={"E-" + props.exhibitions[0].id.toString()} >
          <Col key={"m-col-r1c1"} className={"museum-exhibitions"}
               md={5}
               title={`Click here to navigate to see information about the ${props.museum}`}
          >

            {props.setSelectedMuseum ?
            <Link key={"m-link-1"} id={"mus-exh-link"}
                  onClick={
                    () => props.setSelectedMuseum({
                    id: props.museumId,
                    name: props.museum
                  })

                  }
                  to={{pathname: "/Museum"}}>

              {props.museum}

            </Link>

            :

                props.museum}

          </Col>
          <Col key={"m-r1c2"} className={"museum-exhibitions"}
               md={7}>
            {props.exhibitions ? props.exhibitions[0].exhibition : ''}
          </Col>
        </Row>
        {props.exhibitions.length > 1 ? (
            props.exhibitions.slice(1).map((exhibit) => (
                <Exhibit key={"E-" + exhibit.id.toString()} exhibit={exhibit.exhibition}
                />
            ))) : ''
        }
      </>
  )
}

export default MuseumExhibitions;