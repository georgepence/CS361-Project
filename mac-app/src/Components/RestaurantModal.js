import { Modal, Button } from 'react-bootstrap';

function RestaurantModal(props) {
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default RestaurantModal;