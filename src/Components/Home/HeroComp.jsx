import { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
const HeroSection = () => {
  const changeText = [" Luxury", "Various"];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item interval={800}>
        <div className="Hero-bg1 d-flex justify-content-center align-items-center">
          <Container
            className="fs-1 d-flex align-items-center"
            style={{
              letterSpacing: "1px",
              lineHeight: "100px",
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
                  <p className="luxury">
                    <Typewriter
                      words={changeText}
                      loop={false}
                      cursorStyle={"_"}
                      cursor
                    />
                  </p>
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
      </Carousel.Item>

      <Carousel.Item>
        <div className="Hero-bg2 d-flex justify-content-center align-items-center">
          <Container
            className="fs-1 d-flex align-items-center"
            style={{
              letterSpacing: "1px",
              lineHeight: "100px",
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
                  <p className="luxury">
                    <Typewriter
                      words={changeText}
                      loop={false}
                      cursorStyle={"_"}
                      cursor
                    />
                  </p>
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
      </Carousel.Item>

      <Carousel.Item>
        <div className="Hero-bg3 d-flex justify-content-center align-items-center">
          <Container
            className="fs-1 d-flex align-items-center"
            style={{
              letterSpacing: "1px",
              lineHeight: "100px",
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
                  <p className="luxury">
                    <Typewriter
                      words={changeText}
                      loop={false}
                      cursorStyle={"_"}
                      cursor
                    />
                  </p>
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
      </Carousel.Item>
    </Carousel>
  );
};
export default HeroSection;
