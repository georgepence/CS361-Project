import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import {fetchAddrQuery} from "../../DataAccess/queries";
import LoadingSpinner from "../Helpers/LoadingSpinner";
import Parser from "html-react-parser";

function RestaurantModal(props) {
  
  const [ loadingStatus, setLoadingStatus ] = useState({ loading: false });
  const [ mapError, setMapError ] = useState('')
  const [ mapCode, setMapCode ] = useState('')
  
  // reset modal data when it closes
  function closeModal( hide ) {
      setMapError('');
      setMapCode('')
      hide();
  }
  
  useEffect( () => {
        async function fetchMap(props) {
          setLoadingStatus({loading: true})
          let status = { error: false };
          let fetchMapURL = "http://flip1.engr.oregonstate.edu:5679/map?";
          console.log("props=", props.restaurant.street, props.restaurant.city)
          let r = {}
          try{
            r.street = props.restaurant.street.split(' ').join('+');
            r.city = props.restaurant.city.split(' ').join('+');
            console.log("r = ", r, !status.error)
          } catch {
            
            setMapError('Unable to fetch Map');
            status.error = true;
          }

          // GET request to teammate's micro service
          fetchMapURL += `city=${r.city}&state=${props.restaurant.state}&streetAddr=${r.street}`
          console.log(fetchMapURL)
          if (!status.error) {
            await fetch(fetchMapURL)
                .then((response) => response.text())
                .then((data) => {
                  setMapCode(data)
                })
                .catch((err) => {
                  console.log("In MuseumMap- error fetching Map", err);
                  setMapError('Unable to fetch Map');
                })
                .finally(() => {})
          }
        }
        fetchMap(props)
            .finally(() => setLoadingStatus({ loading: false }))
      }
      , [props]);
  
  return (
      <Modal
          {...props}
          size={"med"}
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.restaurant.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={"text-center"}>{props.restaurant.street}</p>
          <p className={"text-center"}>{props.restaurant.city} {props.restaurant.state}</p>
          <p className={"text-center"}>{props.restaurant.price}</p>
          <div>
            {loadingStatus.loading ?
                <LoadingSpinner loading={loadingStatus.loading}
                                className={"map-center-vertical"} />
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