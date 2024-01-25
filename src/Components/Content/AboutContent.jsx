import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/IMG/Page-about/img1 1.svg";

const AboutContent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center  about-page">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="about d-flex justify-content-center align-items-center row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
          <Col className="about-col1 fs-5">
            <div className="fs-2 fw-bold ">
              Hello, I'm <span>Fauzan</span>
            </div>
            <div className="text-myinfo">
              <p>
                Perkenalkan nama saya Ahmad fauzan, saya adalah seorang siswa
                dari SMAN 11.Di lomba ini tugas bagian saya adalah membuat
                program web designnya, salam kenal ya!
              </p>
            </div>
          </Col>
          <div className="img1 py-4">
            <img src={img1} alt="Fauzan" />
          </div>
          <Col className="fs-5 about-col2">
            <div className="fs-2 fw-bold">
              Hello, I'm <span>Abiyan</span>
            </div>
            <div>
              <p>
                Perkenalkan nama saya Abiyan samawi al-kindi, saya adalah
                seorang siswa dari SMAN 11.Di lomba ini tugas bagian saya adalah
                membuat design UI nya, salam kenal ya!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutContent;
