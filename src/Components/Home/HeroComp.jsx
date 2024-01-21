import { Container, Row, Col } from "react-bootstrap";
const HeroSection = () => {
  return (
    <div className="Hero-bg d-flex justify-content-center align-items-center">
      <Container
        className="fs-1 d-flex align-items-center"
        style={{
          letterSpacing: "1px",
          lineHeight: "50px",
        }}
      >
        <Row>
          <Col className="fs-1 ms-1 contain">
            <div
              className="text-uppercase luxury"
              style={{
                color: "#9C881E",
                fontSize: "1.4em",
              }}
            >
              <p className="luxury">Luxury</p>
            </div>
            <div
              className="text-capitalize ms-5 fashion"
              style={{
                fontSize: "1.7em",
              }}
            >
              <p className="fashion">Fashion</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroSection;
