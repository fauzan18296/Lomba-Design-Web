import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
const ContactContent = () => {
  return (
    <div>
      <Container className="contact-page d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <h1>Page Contact</h1>
            <Form inline>
              <InputGroup size="lg">
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Email</div>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className="d-flex align-items-center"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactContent;
