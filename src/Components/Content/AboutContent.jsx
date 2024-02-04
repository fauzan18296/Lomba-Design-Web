import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareInstagram,
  faSquareFacebook,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../assets/IMG/Page-about/img1 1.svg";
import img2 from "../../assets/IMG/Page-about/img2 1.svg";

const AboutContent = () => {
  const changeText1 = [
    " Fauzan",
    " Student",
    " Web Developer",
    " Front-End Developer",
  ];
  const changeText2 = [" Abiyan", " Student", " Web Designer"];

  return (
    <div>
      <Container className="about-page d-flex justify-content-center align-items-center w-full h-full ">
        <Row className="about d-flex justify-content-center align-items-center pt-5 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
          <Col className="fs-5">
            <div className="fs-2 fw-bold ">
              Hello, I'm a
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

            <div className="links d-flex align-items-center ">
              <a href="https://twitter.com/fauzan18296" className=" pe-2 link">
                <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" />
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=100034570607256"
                className="pe-2 link"
              >
                <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
              </a>

              <a
                href="https://www.instagram.com/ahd_fauzan18/?next=%2F&hl=id"
                className="pe-2 link"
              >
                <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmad-fauzan-b96ba9238/"
                className="pe-2 link"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>

              <a href="https://github.com/fauzan18296" className="link">
                <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
              </a>
            </div>
          </Col>

          <div className="img1 pt-5">
            <img src={img1} alt="Fauzan" />
          </div>

          <Col className="fs-5 pt-5">
            <div className="fs-2 fw-bold">
              Hello, I'm a
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
