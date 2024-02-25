import { Container, Col, Row } from "react-bootstrap";
import fashionKids1 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids1.svg";
import fashionKids2 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids2.svg";
import fashionKids3 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids3.svg";
import fashionKids4 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids4.svg";
import fashionKids5 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids5.svg";
import fashionKids6 from "../../assets/IMG/Catalog-page/Fashion-kids/fashion-kids6.svg";
import fashionMen1 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men1.svg";
import fashionMen2 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men2.svg";
import fashionMen3 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men3.svg";
import fashionMen4 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men4.svg";
import fashionMen5 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men5.svg";
import fashionMen6 from "../../assets/IMG/Catalog-page/Fashion-men/fashion-men6.svg";
import fashionWoman1 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman1.svg";
import fashionWoman2 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman2.svg";
import fashionWoman3 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman3.svg";
import fashionWoman4 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman4.svg";
import fashionWoman5 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman5.svg";
import fashionWoman6 from "../../assets/IMG/Catalog-page/Fashion-woman/fashion-woman6.svg";

const CatalogContent = () => {
  return (
    // Section Kids
    <section className="catalog-content my-5 py-5">
      <h1 className="text-center py-4 fw-semibold fs-lg">Kids</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          className="d-flex justify-content-center align-items-center
         row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gy-5 pt-2 pb-5 "
        >
          <Col className="d-flex justify-content-center list-category1">
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

          <Col className="d-flex justify-content-center list-category2">
            <img src={fashionKids2} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>

          <Col className="d-flex justify-content-center list-category3 ">
            <img src={fashionKids3} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>

          <Col className="d-flex justify-content-center list-category4 ">
            <img src={fashionKids4} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>

          <Col className="d-flex justify-content-center list-category5">
            <img src={fashionKids5} alt="fashion-kids" />
             <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center list-category6 ">
            <img src={fashionKids6} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
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
          <Col className="d-flex justify-content-center list-category1">
            <img src={fashionMen1} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center list-category2">
            <img src={fashionMen2} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center list-category3">
            <img src={fashionMen3} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  list-category4">
            <img src={fashionMen4} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  list-category5">
            <img src={fashionMen5} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  list-category6">
            <img src={fashionMen6} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
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
          <Col className="d-flex justify-content-center list-category1">
            <img src={fashionWoman1} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center list-category2">
            <img src={fashionWoman2} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center list-category3">
            <img src={fashionWoman3} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  list-category4">
            <img src={fashionWoman4} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  list-category5">
            <img src={fashionWoman5} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
          <Col className="d-flex justify-content-center  list-category6">
            <img src={fashionWoman6} alt="fashion-kids" />
            <div className="list-price">
            <div className="price">
            Rp150.000
            <div className="btn-buy">
              <button>Buy</button>
              </div>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
      {/* Section women end */}
    </section>
  );
};
export default CatalogContent;
