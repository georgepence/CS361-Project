import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

function CustomNavbar(props) {
  return (
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/">Explore Richmond</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Museums</Nav.Link>
              <Nav.Link href="/exhibitions">Exhibitions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export { CustomNavbar as Navbar };