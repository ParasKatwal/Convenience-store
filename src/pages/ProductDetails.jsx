import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
// IMAGES
import productImg from "../img/p1.png";
import master from "../img/master.png";
import visa from "../img/visa.png";
import cash from "../img/visa.png";
import esewa from "../img/esewa.png";

// COMPONENTS
import SingleProduct from "../components/SingleProduct";

function ProductDetails() {
    return (
        <>
            <div className="product-details">
                <Container>
                    <div className="product-details__top">
                        <Row>
                            <Col sm={12} md={6}>
                                <div className="product-details__img">
                                    <img src={productImg} alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="product-details__pricing">
                                    <p>Vedaka Gold Tea</p>
                                    <div className="price">
                                        <h4>Rs. 329.99</h4>
                                        <Link to="/checkout">
                                            <button>Add to cart</button>
                                        </Link>
                                    </div>
                                    <br />
                                    <span>
                                        Anywhere Inside Ring-road: Rs. 100
                                        Outside Rind-road: Rs. 200
                                    </span>
                                </div>
                                <div className="payment">
                                    <span>payment:</span>
                                    <div className="cards">
                                        <img src={cash} alt="" />
                                        <img src={master} alt="" />
                                        <img src={visa} alt="" />
                                        <img src={esewa} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="product-details__description">
                        <h1 className="title">Description</h1>
                        <p>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Vivamus suscipit tortor eget felis
                            porttitor volutpat. Cras ultricies ligula sed magna
                            dictum porta. Praesent sapien massa, convallis a
                            pellentesque nec, egestas non nisi. Curabitur non
                            nulla sit amet nisl tempus convallis quis ac lectus.
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Donec velit
                            neque, auctor sit amet aliquam vel, ullamcorper sit
                            amet ligula. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam
                            vel, ullamcorper sit amet ligula. Curabitur non
                            nulla sit amet nisl tempus convallis quis ac lectus.
                            Pellentesque in ipsum id orci porta dapibus. Quisque
                            velit nisi, pretium ut lacinia in, elementum id
                            enim. Nulla quis lorem ut libero malesuada feugiat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras ultricies ligula sed magna dictum porta.
                            Pellentesque in ipsum id orci porta dapibus.
                        </p>
                        <div className="product-details__description__img">
                            <img src={productImg} alt="" />
                        </div>
                    </div>
                    <div className="related-products">
                        <h3 className="title">Related Products</h3>
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
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ProductDetails;
