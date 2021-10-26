import {Container, Row, Col, Breadcrumb, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
// import { GetExhibitions as fetchExhibitions } from "../DataAccess/GetExhibitions"  todo
import MuseumExhibitions from "../Components/MuseumExhibitions";


function Museum(props) {
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  const [exhibitions, setExhibitions] = useState([]);
  const [museums, setMuseums] = useState([]);
  const [exhibitsPage, setExhibitsPage] = useState(false);
  
  console.log("props", props)
  
  // ----------- Get Exhibition information --------------
  
  function getExhibitions() {
    
    const query = "select Museums.name as museum, Museums.museumId as id, " +
        "Exhibitions.exhibitName as exhibition, Exhibitions.exhibitId as  " +
        "exhibitId from Museums left join Exhibitions on " +
        `Museums.museumId = Exhibitions.museumId where Museums.museumId=${props.museum.id}`
    const url = `/api/exhibitions?query=${query}`;
    
    async function getExhibits() {
      setLoadingStatus({loading: true})
      await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setExhibitions(data);
            console.log("data!!!!!", data)
            
            // Organize the exhibitions by museum.
            let rvaMuseums = [{name: data[0].museum, exhibitions: []}];
            console.log("rvaMuseums = ", rvaMuseums)
            for (let i = 0; i < data.length; i++) {
              
              console.log("rvaMuseums = ", rvaMuseums)
              rvaMuseums[0].exhibitions.push({
                exhibition: data[i].exhibition,
                id: data[i].id
              })
            }
            
            setMuseums(rvaMuseums);
          })
          .catch((err) => {
            console.error("Error in GetExhibitions = ", err)
          })
          .finally(() => setLoadingStatus({loading: false}));
    }
    
    getExhibits().then(() => console.log("TestFetch Finished"));
  }
  
  useEffect(() => {
    getExhibitions()
  }, []);
  
  // ----------- Render page --------------
  return (
      <>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/"
                             title={"Return to the Home Page"}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item id={"m-bc-back"}
                             hidden={!exhibitsPage}
                             onClick={() => {setExhibitsPage(false)}}
                             title={`Return to the ${props.museum.name} information page`}
            >
              {props.museum.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item hidden={!exhibitsPage} active>Exhibitions</Breadcrumb.Item>
            <Breadcrumb.Item hidden={exhibitsPage} active>{props.museum.name}</Breadcrumb.Item>
          </Breadcrumb>
          
          <Row className={"museum-r"}>
            <Col>
              <h1 className={"mt-2 mus-h1"}>
                {props.museum.name}
              </h1>
            </Col>
          </Row>
          
          <Row id={"spacer"}>
            <Col>
            </Col>
          </Row>
          
          <Row
              className={"museum-r museum-r1 g-4"}
              hidden={exhibitsPage}>
            <Col>
              <LoadingSpinner loading={loadingStatus.loading}/>
              
              <h6>Museum Description</h6>
              <h6>Hours</h6>
              <h6>Location</h6>
              <Button variant={"outline-secondary"}
                      onClick={() => {
                        setExhibitsPage(!exhibitsPage)
                      }} title={`View the exhibitions at the ${props.museum.name}`}>
                View Exhibition Information for {props.museum.name}
              </Button>
            </Col>
          </Row>
          
          <Row xs={1}
               className="g-4 museum-r1 museum-r"
               hidden={!exhibitsPage}>
            <h3>Exhibitions</h3>
            {museums ? (
                museums.map((museum) => (
                    <MuseumExhibitions
                        museum={museum.name}
                        exhibitions={museum.exhibitions}
                    />
                ))) : (
                <Col>
                  <h4>There are no exhibitions to display</h4>
                </Col>)
            }
          </Row>
          
          <Row id={"spacer"}>
            <Col>
            </Col>
          </Row>
          
          <Row className={"g-4 museum-r2"}>
            <Col md={6}>
              <div className={"div-r2"}
                   title={`View ${props.museum.name} location, get directions`}>
                <h6>Map</h6>
                <p>
                  Location map of the museum will be shown here,
                  provided by teammate's microservice.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className={"div-r2"}
                   title={`View Richmond restaurants, pick where to have lunch` +
                    ` or dinner when visiting the ${props.museum.name}`}>
                <h6>Local Restaurants</h6>
                <p>
                  Information on local restaurants will be shown here,
                  provided by teammate's microservice.
                </p>
              </div>
            </Col>
          
          </Row>
        
        </Container>
      </>
  )
}

export default Museum;