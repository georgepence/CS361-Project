import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
// import LoadingSpinner from "../Components/LoadingSpinner";   // Todo
import MuseumExhibits from "../Components/Exhibitions/MuseumExhibits";
import Date from "../Components/Helpers/Date";

function Exhibitions(props) {
  // const [exhibitions, setExhibitions] = useState([]);    // TODO
  // const [museums, setMuseums] = useState([]);            // Todo
  const [ visitDate, setVisitDate ] = useState('');
  
  // ----------- Render page --------------
  return (
      <>
        <Container >
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Exhibitions</Breadcrumb.Item>
          </Breadcrumb>

          <div id={"exhibition-set-date"} className={"shadow"}>
            <Row>
            <Col md={2}></Col>
            <Col md={7}>
              <Date name={"visitDate"}
                    id={"visitDate"}
                    value={visitDate}
                    setValue={setVisitDate}
                    label={"View Exhibitions for what visit date?"}

              />
            </Col>
            <Col md={3}>
              <Button
                  className={"mb-3 mt-1 mr-5 shadow"}
                  variant="outline-primary"
                  onClick={() => {setVisitDate('')}}
                  title={"View exhibitions available at a future date"}
              >
                View all dates
              </Button>
            </Col>
          </Row>
          </div>




          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Exhibitions</h1>
            </Col>
          </Row>
          
          <MuseumExhibits visible={true}
                          options={ visitDate ? { date: visitDate } : { } }
          />

        </Container>
      </>
  )
}

export default Exhibitions;