import {Container, Row, Col, Breadcrumb, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import MuseumMap from "../Components/MuseumMap";
import Restaurants from "../Components/Restaurants";
import RestaurantModal from "../Components/RestaurantModal";
// import { GetExhibitions as fetchExhibitions } from "../DataAccess/GetExhibitions"  todo
import MuseumExhibitions from "../Components/MuseumExhibitions";


function Museum(props) {
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(0);
  // const [exhibitions, setExhibitions] = useState([]);      //  TODO
  const [modalShow, setModalShow] = useState(false);
  const [museums, setMuseums] = useState([]);
  const [exhibitsPage, setExhibitsPage] = useState(false);
  
  
  
  // ======== ---->  Get Exhibitions   <---- ==================================
  
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
            // setExhibitions(data);          // TODO
            // console.log("data!!!!!", data)    // TODO
            
            // Organize the exhibitions by museum.
            let rvaMuseums = [{
              name: data[0].museum,
              exhibitions: [],
              key: data[0].id
            }];
            console.log("rvaMuseums = ", rvaMuseums)
            for (let i = 0; i < data.length; i++) {
              
              console.log("rvaMuseums = ", rvaMuseums)
              rvaMuseums[0].exhibitions.push({
                exhibition: data[i].exhibition,
                id: data[i].exhibitId,
                key: data[i].exhibitId
              })
            }
            
            setMuseums(rvaMuseums);
          })
          .catch((err) => {
            console.error("Error in GetExhibitions = ", err)
          })
          .finally(() => setLoadingStatus({loading: false}));
    }
    
    getExhibits().then(() => console.log("TestFetch Finished in Museum"));
  }
  
  useEffect(() => {
    getExhibitions()
  }, []);
  
  // ======== ---->  Get Restaurants   <---- ==================================
  
  function getRestaurants() {
    
    async function fetchRestaurants() {
      setLoadingStatus({loading: true})
      
      // http://flip1.engr.oregonstate.edu:5678/map?city=Richmond&state=VA
      const url = 'http://flip1.engr.oregonstate.edu:9797/search?'
      await fetch(url + `city=${props.city}&state=${props.state}`)
          .then((response) => response.json())
          .then((data) => {
            setRestaurants(data)
          })
          .catch((err) => {
            console.log("Error fetching Restaurants", err);
          })
          .finally(() => {})
      
    }
    fetchRestaurants().then(() => {setLoadingStatus({loading: false})});
  }
  
  useEffect(() => getRestaurants(), []);
  
  
  // ======== ---->    Render page     <---- ==================================
  
  return (
      <>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item key={"mus-bc-1"}
                             href="/"
                             title={"Return to the Home Page"}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item key={"mus-bc-2"}
                             id={"m-bc-back"}
                             hidden={!exhibitsPage}
                             onClick={() => {setExhibitsPage(false)}}
                             title={`Return to the ${props.museum.name} information page`}
            >
              {props.museum.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item key={"mus-bc-3"}
                             hidden={!exhibitsPage} active>Exhibitions</Breadcrumb.Item>
            <Breadcrumb.Item key={"mus-bc-4"}
                             hidden={exhibitsPage} active>{props.museum.name}</Breadcrumb.Item>
          </Breadcrumb>
          
          <Row key={"row1"} className={"museum-r"}>
            <Col>
              <h1 className={"mt-2 mus-h1"}>
                {props.museum.name}
              </h1>
            </Col>
          </Row>
          
          <Row key={"row2"} id={"spacer"}>
            <Col>
            </Col>
          </Row>
          
          <Row key={"row3"}
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
          
          <Row key={"row4"} xs={1}
               className="g-4 museum-r1 museum-r"
               hidden={!exhibitsPage}>
            <h3>Exhibitions</h3>
            {museums ? (
                museums.map((museum, index) => (
                    <MuseumExhibitions key={museum.id}
                                       museum={museum.name}
                                       museumId={museum.id}
                                       exhibitions={museum.exhibitions}
                    />
                ))) : (
                <Col>
                  <h4>There are no exhibitions to display</h4>
                </Col>)
            }
          </Row>
          
          <Row key={"row5"} id={"spacer"}>
            <Col>
            </Col>
          </Row>
          
          <Row key={"row6"} className={"g-4 museum-r2"}>
            <Col className={"c-r2"} md={6}>
              <div id={"map-container"} className={"div-r2"}
                   title={`View ${props.museum.name} location, get directions`}>
                <MuseumMap city={"Richmond"} state={"VA"} />
              </div>
            </Col>
            <Col className={"c-r2"} md={6}>
              <div className={"div-r2"}>
                <div id={"restaurant-container"}
                     title={`View Richmond restaurants, pick where to have lunch` +
                     ` or dinner when visiting the ${props.museum.name}`}>
                  <Restaurants city={"Richmond"}
                               state={"VA"}
                               restaurants={restaurants}
                               showRestaurant={() => {setModalShow(true)}}
                               setRestaurant={setRestaurant}
                               />
                </div>
              </div>

            </Col>
          
          </Row>
          
          <RestaurantModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              restaurant={restaurant}
          />
        
        </Container>
      </>
  )
}

export default Museum;