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
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Exhibitions</Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col md={4}></Col>
            <Col md={8}>
              <Row id={'exhibition-set-date'}>

                  <Col md={8}>
                    <Date name={"visitDate"}
                          id={"visitDate"}
                          value={visitDate}
                          setValue={setVisitDate}
                          label={"Filter by visit date"}

                    />
                  </Col>
                  <Col >
                    <Button
                        className={"mb-1 mt-1 mr-1 shadow"}
                        variant="outline-primary"
                        onClick={() => {
                          setVisitDate('')
                        }}
                        title={"View exhibitions available at a future date"}
                        size={'sm'}
                    >
                      View all dates
                    </Button>
                  </Col>

              </Row>
            </Col>

          </Row>


          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Exhibitions</h1>
            </Col>
          </Row>

          <MuseumExhibits visible={true}
                          options={visitDate ? {date: visitDate} : {}}
          />

        </Container>
      </>
  )
}

export default Exhibitions;