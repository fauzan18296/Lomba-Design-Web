import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

const ContactContent = () => {
  return (
    <div>
      <Container className="contact-page d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center mx-3 my-3">
          <Col className="d-flex justify-content-center align-items-center mx-3 my-3 w-full">
            <Form>
              <InputGroup
                size="lg"
                className="d-flex justify-content-center align-items-center my-3"
              >
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Email:</div>
                  <Form.Control
                    type="Email"
                    placeholder="email"
                    className="d-flex align-items-center input-control text-capitalize ms-5"
                  />
                </Form.Label>
              </InputGroup>

              <InputGroup
                size="lg"
                className="d-flex justify-content-center align-items-center my-3 "
              >
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Username:</div>
                  <Form.Control
                    type="text"
                    placeholder="username"
                    className="d-flex align-items-center input-control text-capitalize ms-3 "
                  />
                </Form.Label>
              </InputGroup>

              <InputGroup
                size="lg"
                className="d-flex justify-content-center align-items-center my-3"
              >
                <Form.Label className="d-flex align-items-center pe-4 fs-4 fw-semibold">
                  <div>Password:</div>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    className="d-flex align-items-center input-control text-capitalize ms-3"
                  />
                </Form.Label>
              </InputGroup>

              <InputGroup
                size="lg"
                className="d-flex justify-content-center align-items-center"
              >
                <Form.Label className="d-block pe-4  fs-4 fw-semibold">
                  <div>Suggestion:</div>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="suggestion"
                  className="d-flex px-2 input-suggestion text-capitalize"
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
