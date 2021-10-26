import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNavbar(props) {
  return (
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/"
                        title={"Homepage"}>
            Explore Richmond
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"
                        title={"View Richmond Museums"}>
                Museums
              </Nav.Link>
              <Nav.Link href="/exhibitions"
                        title={"See all exhibitions at all Richmond Museums"}>
                Exhibitions
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export { CustomNavbar as Navbar };