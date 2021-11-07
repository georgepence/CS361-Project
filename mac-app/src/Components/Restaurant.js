import { Button, Row, Col } from 'react-bootstrap';

const Restaurant = (props) => {
  
  // function showRestaurant(props) {
  //   props.setRestaurant(props.restaurant);
  //   props.setModalShow(true);
  // }
  
  return (
      <>
      <Row>
        <Col>
          <Button variant={"light"}
              // key={props.key}
                  className={'r-name'}
                  onClick={ () => {
                    props.showRestaurant()
                    props.setRestaurant(props.restaurant)
                  } }
          >
            { props.restaurant.name }
          </Button>
        </Col>
      </Row>
      </>
  )
}

export default Restaurant;