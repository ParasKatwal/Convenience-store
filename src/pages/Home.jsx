import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// IMAGES
import heroBg from "../img/herobg.png";
import cheap from "../img/cheap.png";
import hour from "../img/hour.png";
import money from "../img/money.png";
import payment from "../img/payment.png";

// COMPONENTS
import SingleProduct from "../components/SingleProduct";

function Home() {
    return (
        <>
            <div className="hero">
                <Container>
                    <div className="hero__bg">
                        <img src={heroBg} alt="" />
                    </div>
                    <div className="hero__card">
                        <div className="card">
                            <Row>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={cheap} alt="" />
                                        <div className="pl-3">
                                            <p>Cheap Shipping</p>
                                            <span>Very low price</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={money} alt="" />
                                        <div className="pl-3">
                                            <p>100% Money Back</p>
                                            <span>30 days money back</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={hour} alt="" />
                                        <div className="pl-3">
                                            <p>Help Center</p>
                                            <span>24/7 Support System</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={payment} alt="" />
                                        <div className="pl-3">
                                            <p>Payment Method</p>
                                            <span>Secure payment</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="feature">
                <Container>
                    <h4 className="title">Featured Products</h4>
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
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Home;
