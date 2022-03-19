import { Container, Modal, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

// Credits

function Credits() {
  const [ modalVisible, setModalVisible ] = useState("false")

  // render page
  return (
      <div>
        
        <Container>
          <div style={{height: "50px"}}>
            <p> </p>
          </div>
          
          <h2 className={"mt-5 mb-4"}  style={{color: "midnightblue"}}>
            Website Design Credits
          </h2>
          
          <p>
            Richmond Museums was created by <span className={"loud"}>George "Mac" Pence</span> as a
            portfolio project for the class "Software Engineering" at
            Oregon State University during Fall 2021.
          </p>
          
          <p>
            Mac and four other students worked together during the term as
            the <span className={"loud"}>Dauntless Designs</span> team. Each
            student produced their own application, but consulted with each other,
            as well as providing microservices for use by the teams websites.
            The other students
            on the team were Elizabeth De Laurell, Nelsyda Perez, Christopher
            Peterman, and Steven Turner.
          </p>
          
          <p>
            This project was produced using react and bootstrap for the front
            end, and JavaScript and Express for the back end.
          </p>
          
          <h2 className={"mt-5 mb-4"}  style={{color: "midnightblue"}}>
            External Links
          </h2>
          
          <p>
            <Button className={"credits"}
                    variant={"outline-secondary"}
                    onClick={() => {setModalVisible(false)}}
                    title={"Caution: This will take you away from this website"}
            >Mac Pence on Github
            </Button>
          </p>
          
          <div style={{height: "90px"}}>
            <p></p>
          </div>
        
        </Container>
        <Modal animation={false} show={!modalVisible} onHide={() => setModalVisible(true)}>
          <Modal.Header closeButton>
            <Modal.Title id={"confirm-github-title"} >
              Please Confirm or Cancel
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Container className={"pt-0 pb-2"}>
                <Row>
                  <Col>
                    <p id={"confirm-github"}>
                      This will navigate away away from Richmond Virginia Museums, to a
                      different website
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary"
                            md={4}
                            href={"https://github.com/georgepence"}
                            onClick={() => setModalVisible("false")}
                    >
                      Yes, I want to go to Mac's Github
                    </Button>
                  </Col>
                </Row>
              </Container>
          </Modal.Body>
        </Modal>
      
      </div>
  );
}

export default Credits;
