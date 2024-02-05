import { Container, Col, Row } from "react-bootstrap";
import fashionKids1 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids1.svg";

const CatalogContent = () => {
  return (
    <div className="catalog-content my-5 py-5">
      <h1 className="text-center">Kids</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          className="d-flex justify-content-center align-items-center
         row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gy-5 gx-2 pt-2 pb-5"
        >
          <Col className="d-flex justify-content-center ">
            <img src={fashionKids1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center ">
            <img src={fashionKids1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center ">
            <img src={fashionKids1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionKids1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionKids1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionKids1} alt="fashion-kids" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CatalogContent;
