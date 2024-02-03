import { Container, Col, Row } from "react-bootstrap";

const CatalogContent = () => {
  return (
    <div>
      <Container className="catalog-content d-flex justify-content-center align-items-center w-full">
        <Row>
          <Col>
            <h1 className="m-5">Page Catalog</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CatalogContent;
