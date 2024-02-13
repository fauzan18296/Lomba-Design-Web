import { Container, Col, Row } from "react-bootstrap";
import fashionKids1 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids1.svg";
import fashionKids2 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids2.svg";
import fashionKids3 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids3.svg";
import fashionKids4 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids4.svg";
import fashionKids5 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids5.svg";
import fashionKids6 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids6.svg";
import fashionMen1 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men1.svg";
import fashionWoman1 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman1.svg";

const CatalogContent = () => {
  return (
    // Section Kids
    <section className="catalog-content my-5 py-5">
      <h1 className="text-center py-4 fw-semibold fs-lg">Kids</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          className="d-flex justify-content-center align-items-center
         row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gy-5 pt-2 pb-5"
        >
          <Col className="d-flex justify-content-center   ">
            <img src={fashionKids1} alt="fashion-kids" />
           <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionKids2} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionKids3} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center   ">
            <img src={fashionKids4} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionKids5} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center   ">
            <img src={fashionKids6} alt="fashion-kids" />
          </Col>
        </Row>
      </Container>
      {/* Section kids end */}
      {/* Section Men */}
      <h1 className="text-center py-4 fw-semibold fs-1">Men</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          className="d-flex justify-content-center align-items-center
         row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gy-5 gx-2 pt-2 pb-5 "
        >
          <Col className="d-flex justify-content-center">
            <img src={fashionMen1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center ">
            <img src={fashionMen1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center ">
            <img src={fashionMen1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionMen1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionMen1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionMen1} alt="fashion-kids" />
          </Col>
        </Row>
      </Container>
      {/* Section men end */}
      {/* Section Women */}
      <h1 className="text-center py-4 fw-semibold fs-1">Woman</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          className="d-flex justify-content-center align-items-center
         row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gy-5 gx-2 pt-2 pb-5 "
        >
          <Col className="d-flex justify-content-center">
            <img src={fashionWoman1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center ">
            <img src={fashionWoman1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center ">
            <img src={fashionWoman1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionWoman1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionWoman1} alt="fashion-kids" />
          </Col>
          <Col className="d-flex justify-content-center  ">
            <img src={fashionWoman1} alt="fashion-kids" />
          </Col>
        </Row>
      </Container>
      {/* Section women end */}
    </section>
  );
};
export default CatalogContent;
