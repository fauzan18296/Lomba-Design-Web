import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
const ContactContent = () => {
  return (
    <div>
      <Container className="contact-page d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center mx-auto">
          <Col className="mx-auto">
            <h1>Page Contact</h1>
            <Form inline>
              <InputGroup size="lg" className="my-3 ">
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Username :</div>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="username"
                  className="d-flex align-items-center input-control text-capitalize "
                />
              </InputGroup>
              <InputGroup size="lg" className="my-3">
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Password :</div>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className="d-flex align-items-center input-control text-capitalize"
                />
              </InputGroup>
              <InputGroup size="lg" className="my-3">
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Suggestion :</div>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="suggestion"
                  className="d-flex align-items-center input-control text-capitalize"
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
