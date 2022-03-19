import { Container, Row, Col, Image } from "react-bootstrap";
import BreadCrumbs from "./Helpers/BreadCrumbs";
import { useEffect, useState } from "react";

import getMuseumInfo from "../DataAccess/getMuseumInfo";
import LoadingSpinner from "./Helpers/LoadingSpinner";
import MuseumInfo from "./Museum/MuseumInfo";
import MuseumExhibits from "./Exhibitions/MuseumExhibits";
import MuseumMap from "./Museum/MuseumMap";
import Restaurants from "./Museum/Restaurants";
import RestaurantModal from "./Museum/RestaurantModal";

function Museum(props) {
  
  // ----------- Set State -----------------------------------------------------
  const [ loadingStatus, setLoadingStatus ] = useState({ loading: false });
  const [ museum, setMuseum ] = useState({});
  const [ restaurants, setRestaurants ] = useState([]);
  const [ restaurant, setRestaurant ] = useState(0);
  const [ modalShow, setModalShow ] = useState(false);
  
  // ----------- Get Information on Museum & its exhibits ----------------------

  useEffect( () =>{
    async function fetchMuseumInfo(id) {
      setLoadingStatus({ loading:true });
      
      await getMuseumInfo(id).then( info => setMuseum(info[0]) );
      
      setLoadingStatus({ loading:false });
      }
      fetchMuseumInfo(props.id)
        .catch(err => console.log("Error fetching museum Info: ", err))
  }, [props.id]);
  
  useEffect(() => {
    async function fetchRestaurants() {
      setLoadingStatus({loading: true})

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
    });
  }, []);
  
  // ----------- Render page ---------------------------------------------------
  return (
      <Container>
       
        <BreadCrumbs show={props.show} setShow={props.setShow} museum={museum.name}/>
        
        <div id={"museum-banner-container"}>
            <Image src={`${process.env.PUBLIC_URL}/images/banner/${props.largePicture}`}
                   fluid
            />
          <div id={"museum-h1-div"}>
            <h1 id={"museum-h1"}>{museum.name}</h1>
          </div>
        </div>
        
        {/* Museum info container, so things don't collapse during refresh */}
        <div id={"museum-info-container"}>
          <LoadingSpinner loading={loadingStatus.loading} />
  
          {/* Show basic museum info, otherwise hidden */}
          <MuseumInfo museum={museum}
                      setShow={props.setShow}
                      visible={!props.show.museumExhibits} />
  
          {/* Show museum exhibitions, otherwise hidden.  -------------------- */}
          {props.show.museumExhibits ?
              <MuseumExhibits options={{id: museum.museumId}}
                              visible={props.show.museumExhibits}/>
              :
              ''
          }
          
        </div>
  
        <Row key={"row6"} className={"g-4 museum-r2"}>
    
          {/* Show map of museum location  ----------------------------------*/}
          <Col className={"c-r2"} md={6}>
            <div id={"map-container"} className={"div-r2"}>
        
              <MuseumMap id={props.id}/>
      
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
                             showRestaurant={() => {
                               setModalShow(true)
                             }}
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