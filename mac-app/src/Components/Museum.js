import { Container, Row, Col } from "react-bootstrap";
import BreadCrumbs from "./Helpers/BreadCrumbs";
import {useEffect, useState} from "react";
import getMuseumInfo from "../DataAccess/getMuseumInfo";
import getExhibitions from "../DataAccess/getExhibitions";
import LoadingSpinner from "./Helpers/LoadingSpinner";
import MuseumInfo from "./Museum/MuseumInfo";
import MuseumExhibits from "./Exhibitions/MuseumExhibits";
import MuseumMap from "./Museum/MuseumMap";
import Restaurants from "./Museum/Restaurants";
import RestaurantModal from "./Museum/RestaurantModal";

function Museum(props) {
  
  // ----------- Set State -----------------------------------------------------
  const [ loadingStatus, setLoadingStatus ] = useState({ loading: false });
  const [ mapLoadingStatus, setMapLoadingStatus ] = useState({ loading: false });
  const [ museum, setMuseum ] = useState({});
  const [ exhibits, setExhibits ] = useState([]);
  const [ restaurants, setRestaurants ] = useState([]);
  const [ restaurant, setRestaurant ] = useState(0);
  const [ modalShow, setModalShow ] = useState(false);
  
  // ----------- Get Information on Museum & its exhibits ----------------------

  useEffect( () =>{
    async function fetchMuseumInfo(id) {
      setLoadingStatus({ loading:true });
      
      await getMuseumInfo(id).then( info => setMuseum(info[0]) );
      await getExhibitions({ id: id }).then( result => setExhibits(result) );
      
      setLoadingStatus({ loading:false });
      }
      fetchMuseumInfo(props.id)
        .catch(err => console.log("Error fetching museum Info: ", err))
  }, [props.id]);
  
  useEffect(() => {
    async function fetchRestaurants() {
      setLoadingStatus({loading: true})

      // http://flip1.engr.oregonstate.edu:5678/map?city=Richmond&state=VA
      const url = 'http://flip1.engr.oregonstate.edu:9797/search?'
      await fetch(url + `city=Richmond&state=VA`)
          .then((response) => response.json())
          .then((data) => {
            setRestaurants(data)
          })
          .catch((err) => {
            console.log("Error fetching Restaurants", err);
          })
          .finally(() => {})

    }
    fetchRestaurants().then(() => {
      setLoadingStatus({loading: false})
      console.log("restaurants fetched")
    });
  }, []);
  
  // ----------- Render page ---------------------------------------------------
  return (
      <Container>
       
        <BreadCrumbs show={props.show} setShow={props.setShow} museum={museum.name}/>
  
        <Row id={"home-r1"}>
          <Col>
            <h1 id={"home-h1"} className={"mt-2"}>{museum.name}</h1>
          </Col>
        </Row>
        
        <Row ><LoadingSpinner loading={loadingStatus.loading} /></Row>
        
        {/* Show basic museum info. Hidden when showing museum's exhibitions */}
        <MuseumInfo museum={museum}
                    setShow={props.setShow}
                    visible={!props.show.museumExhibits} />
  
        {/* Show museum exhibitions, otherwise hidden.  -------------------- */}
        <MuseumExhibits options={{ id: museum.museumId }}
                        visible={props.show.museumExhibits} />
  
        <Row key={"row6"} className={"g-4 museum-r2"}>
          
          {/* Show map of museum location  ----------------------------------*/}
          <Col className={"c-r2"} md={6}>
            <div id={"map-container"} className={"div-r2"}>
              
              <MuseumMap id={props.id} />
              
            </div>
          </Col>
  
          {/* Show local restaurants  ---------------------------------------*/}
          <Col className={"c-r2"} md={6}>
            <div className={"div-r2"}>
              <div id={"restaurant-container"}
                   title={`View Richmond restaurants, pick where to have lunch` +
                   ` or dinner when visiting the ${museum.name}`}>
                
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
  
        {modalShow ?
          <RestaurantModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            restaurant={restaurant}
        />
            :
            ''
        }
        
      </Container>
 
  )
}

export default Museum