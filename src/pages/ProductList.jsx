import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// COMPONENTS
import SingleProduct from "../components/SingleProduct";

function ProductList() {
    return (
        <>
            <div className="product-list">
                <Container>
                    <Row className="pt-4">
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                        <Col className="pb-4" sm={12} md={3}>
                            <SingleProduct />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ProductList;
