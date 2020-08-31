import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// IMAGES
import heroBg from "../img/herobg.png";
import cheap from "../img/cheap.png";
import hour from "../img/hour.png";
import money from "../img/money.png";
import payment from "../img/payment.png";

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
                                        <div className="">
                                            <p>Cheap Shipping</p>
                                            <span>Very low price</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={money} alt="" />
                                        <div className="">
                                            <p>100% Money Back</p>
                                            <span>30 days money back</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={hour} alt="" />

                                        <div className="">
                                            <p>Help Center</p>
                                            <span>24/7 Support System</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={payment} alt="" />

                                        <div className="">
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
        </>
    );
}

export default Home;
