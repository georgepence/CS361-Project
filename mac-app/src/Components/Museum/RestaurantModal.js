import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import LoadingSpinner from "../Helpers/LoadingSpinner";
import Parser from "html-react-parser";
import getMap from '../../DataAccess/getMap'

// ------ Show details about one restaurant, with map, in a Modal  ------------

function RestaurantModal(props) {
  
  const [loadingStatus, setLoadingStatus] = useState({loading: false});
  const [mapError, setMapError] = useState('')
  const [mapCode, setMapCode] = useState('')
  
  // reset modal data when it closes
  function closeModal(hide) {
    setMapError('');
    setMapCode('')
    hide();
  }
  
  useEffect(() => {
        async function fetchMap(props) {
          setLoadingStatus({loading: true})

            await getMap(props)
                .then((data) => {
                  setMapCode(data)
                })
                .catch((err) => {
                  setMapError(err);
                })
        }
        fetchMap(props.restaurant)
            .finally(() => setLoadingStatus({loading: false}))
      }
      , [props]);
  
  // ------------------ Render page  ------------------------------------------
  return (
      <Modal
          {...props}
          size={"med"}
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">

              <span id={"modal-title-1"}>
                {props.restaurant.name}
              </span>
          
          </Modal.Title>
          {props.restaurant.price}
        
        </Modal.Header>
        <Modal.Body>
          <p className={"text-center"}>{props.restaurant.street}</p>
          <p className={"text-center"}>{props.restaurant.city} {props.restaurant.state}</p>
          
          <div>
            {loadingStatus.loading ?
                <LoadingSpinner loading={loadingStatus.loading}
                                className={"map-center-vertical"}/>
                :
                mapError ?
                    
                    
                    <p id={"map-error"} className={"align-content-center"}>{mapError}</p>
                    
                    :
                    Parser(mapCode)
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeModal(props.onHide)}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default RestaurantModal;