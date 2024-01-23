import { Container, Row, Col } from "react-bootstrap";
import Kids from "../../assets/IMG/Kids/Imgkids1.svg";
import Men from "../../assets/IMG/Men/Imgmen1 1.svg";
import Woman from "../../assets/IMG/Woman/Imgwoman1 1.svg";
const Category = () => {
  return (
    <div className="py-1 list-category d-flex justify-content-center align-items-center px-4">
      <div className="fs-1 fw-semibold">Category</div>
      <Container className="d-flex justify-content-center align-items-center py-4 ">
        <Row className="d-flex justify-content-center align-items-center row-cols-lg-3 g-5">
          <Col className="d-flex justify-content-center">
            <img src={Kids} alt="Kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={Men} alt="Men" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={Woman} alt="Woman" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Category;
