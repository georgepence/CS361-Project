import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
// import { GetExhibitions as fetchExhibitions } from "../DataAccess/GetExhibitions"  todo

function Exhibitions() {
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  const [exhibitions, setExhibitions] = useState([]);
  
  
  // ----------- Get Exhibition information --------------
  
  function getExhibitions() {
    
    const query = "select Museums.name as museum, Exhibitions.exhibitName " +
        "as exhibition, Exhibitions.exhibitId as id from Museums left join Exhibitions on " +
        "Museums.museumId = Exhibitions.museumId"
    const url = `/api/exhibitions?query=${query}`;
    
    async function getExhibits() {
      setLoadingStatus({loading: true})
      await fetch(url)
          .then((res) => res.json())
          .then((data) => {setExhibitions(data)})
          .catch((err) => {
            console.error("Error in GetExhibitions = ", err)})
          .finally(() => setLoadingStatus({loading: false}));
    }
    getExhibits().then(() => console.log("TestFetch Finished"));
  }
  
  useEffect(() => getExhibitions(), []);
  
  // ----------- Render page --------------
  return (
      <>
        <Container >
          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Exhibitions</h1>
            </Col>
          </Row>
          <Row ><LoadingSpinner loading={loadingStatus.loading} /></Row>
  
          <Row xs={1} className="g-4">
            {exhibitions ? (
                exhibitions.map((exhibit) => (
                    <Col key={exhibit.id}>
                      <p>{exhibit.museum} {exhibit.exhibition}</p>
                    </Col>
                ))) : (
                <Col>
                  <h4>There are no exhibitions to display</h4>
                </Col>)
            }
          </Row>
        </Container>
      </>
  )
}

export default Exhibitions;