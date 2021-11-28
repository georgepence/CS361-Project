import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
// import LoadingSpinner from "../Components/LoadingSpinner";   // Todo
import MuseumExhibits from "../Components/Exhibitions/MuseumExhibits";
import FilterModal from "../Components/Helpers/FilterModal";
import Date from "../Components/Helpers/Date";
import RestaurantModal from "../Components/Museum/RestaurantModal";

function Exhibitions(props) {
  // const [exhibitions, setExhibitions] = useState([]);    // TODO
  // const [museums, setMuseums] = useState([]);            // Todo
  const [ filterModalShow, setFilterModalShow ] = useState(false)
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
            <Col md={8}></Col>
            <Col md={4}>

                    <Button
                        className={" mr-1 shadow"}
                        variant="outline-primary"
                        onClick={() => {
                          visitDate ?
                          setVisitDate('') : setFilterModalShow(true)
                        }}
                        title={"View exhibitions available at a future date"}
                        size={'sm'}
                    >
                      {
                        visitDate ?
                            'View all dates' : 'Filter by visit date'
                      }
                    </Button>

            </Col>

          </Row>


          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Exhibitions</h1>
            </Col>
          </Row>

          <MuseumExhibits visible={true}
                          options={visitDate ? {date: visitDate} : {}}
                          filterVisible={filterModalShow}
          />

          {filterModalShow ?
              <FilterModal
                  visible={filterModalShow}
                  setVisible={() => setFilterModalShow(false)}
                  setDate={setVisitDate}
                  action={() => {}}
              >
                <Date name={"visitDate"}
                      id={"visitDate"}
                      value={visitDate}
                      setValue={setVisitDate}
                      label={"Filter by visit date"}

                />
              </FilterModal>
              :
              ''
          }

        </Container>
      </>
  )
}

export default Exhibitions;