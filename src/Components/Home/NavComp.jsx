import {
  Container,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        className="bg-dark w-full py-1 px-3 d-flex align-items-center justify-content-center navbar"
        variant="dark"
      >
        <Container className="mx-1">
          <Navbar.Brand className="logo-brand fw-semibold fs-3 text-uppercase ">
            asaf
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse-id" />
          <Navbar.Collapse id="navbar-collapse-id">
            <Nav className="fs-5 d-flex align-items-center justify-content-center section-menu-1">
              <Nav.Item className="item1 mx-2 px-2 my-2">
                <Nav.Link as={Link} to="/catalog" eventKey="link-event-key">
                  Catalog
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="item2 mx-2 px-2 my-2">
                <Nav.Link
                  as={Link}
                  to="/customproject"
                  eventKey="link-event-key"
                >
                  Custom Project
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse id="navbar-collapse-id">
          <Nav className="fs-5 d-flex justify-content-center align-items-center section-menu-2">
            <Nav.Item className="mx-2">
              <Nav.Link as={Link} to="/" eventKey="link-event-key">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Nav.Link as={Link} to="/about" eventKey="link-event-key">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Nav.Link as={Link} to="/contact" eventKey="link-event-key">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbar-collapse-id">
          <Form inline>
            <InputGroup>
              <Form.Control
                type="Search"
                placeholder="Search"
                className="d-flex align-items-center"
              />
              <InputGroup.Text>
                <button
                  style={{
                    border: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="md" />
                </button>
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
