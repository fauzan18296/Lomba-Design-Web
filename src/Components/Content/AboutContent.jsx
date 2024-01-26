import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../../assets/IMG/Page-about/img1 1.svg";
import img2 from "../../assets/IMG/Page-about/img2 1.svg";

const AboutContent = () => {
  const changeText1 = [" Fauzan", " Student", " Web Developer"];
  const changeText2 = [" Abiyan", " Student"];

  return (
    <div className="d-flex justify-content-center align-items-center  ">
      <Container className="about-page d-flex justify-content-center align-items-center">
        <Row className="about d-flex justify-content-center align-items-center pt-5 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
          <Col className="fs-5">
            <div className="fs-2 fw-bold ">
              Hello, I'm
              <span>
                <Typewriter
                  words={changeText1}
                  loop={false}
                  cursorStyle={"_"}
                  cursor
                />
              </span>
            </div>
            <div className="text-myinfo">
              <p>
                Perkenalkan nama saya Ahmad fauzan, saya adalah seorang siswa
                dari SMAN 11.Di lomba ini tugas bagian saya adalah membuat
                program web designnya, salam kenal ya!
              </p>
            </div>
          </Col>
          <div className="img1 pt-5">
            <img src={img1} alt="Fauzan" />
          </div>
          <Col className="fs-5 pt-5">
            <div className="fs-2 fw-bold">
              Hello, I'm{" "}
              <span>
                <Typewriter
                  words={changeText2}
                  loop={false}
                  cursorStyle={"_"}
                  cursor
                />
              </span>
            </div>
            <div>
              <p>
                Perkenalkan nama saya Abiyan samawi al-kindi, saya adalah
                seorang siswa dari SMAN 11.Di lomba ini tugas bagian saya adalah
                membuat design UI nya, salam kenal ya!
              </p>
            </div>
          </Col>
          <div className="img2 pt-5 pb-5">
            <img src={img2} alt="Abiyan" />
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default AboutContent;
