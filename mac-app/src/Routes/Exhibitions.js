import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
// import { GetExhibitions as fetchExhibitions } from "../DataAccess/GetExhibitions"  todo
import MuseumExhibitions from "../Components/MuseumExhibitions";

function Exhibitions() {
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  const [exhibitions, setExhibitions] = useState([]);
  const [museums, setMuseums] = useState([]);
  
  
  // ----------- Get Exhibition information --------------
  
  function getExhibitions() {
    
    const query = "select Museums.name as museum, Exhibitions.exhibitName " +
        "as exhibition, Exhibitions.exhibitId as id from Museums left join Exhibitions on " +
        "Museums.museumId = Exhibitions.museumId order by museum"
    const url = `/api/exhibitions?query=${query}`;
    
    async function getExhibits() {
      setLoadingStatus({loading: true})
      await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setExhibitions(data);
            
            // Organize the exhibitions by museum.
            let rvaMuseums = [{name: data[0].museum, exhibitions: []}];
            let index = 0;
            for (let i = 0; i < data.length; i++) {
              console.log("rva = ", rvaMuseums[index].name, "data = ", data[i].museum)
              if (!(rvaMuseums[index].name === data[i].museum)) {
                rvaMuseums.push({
                  name: data[i].museum,
                  exhibitions: []
                });
                index ++
              }
              rvaMuseums[index].exhibitions.push({
                exhibition: data[i].exhibition,
                id: data[i].id
              })
            }

            setMuseums(rvaMuseums);
          })
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
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Exhibitions</Breadcrumb.Item>
          </Breadcrumb>
          <Row id={"home-r1"}>
            <Col>
              <h1 id={"home-h1"} className={"mt-2"}>Exhibitions</h1>
            </Col>
          </Row>
          <Row ><LoadingSpinner loading={loadingStatus.loading} /></Row>
  
          <Row xs={1} className="g-4">
            {museums ? (
                museums.map((museum) => (
                    <MuseumExhibitions museum={museum.name}
                                       exhibitions={museum.exhibitions}
                    />
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