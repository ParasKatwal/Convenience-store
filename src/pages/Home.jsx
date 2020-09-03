import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
// IMAGES
import heroBg from "../img/herobg.png";
import cheap from "../img/cheap.png";
import hour from "../img/hour.png";
import money from "../img/money.png";
import payment from "../img/payment.png";

// COMPONENTS
import ProductList from "./ProductList";
import SingleProduct from "../components/SingleProduct";
import FeaturedProducts from "../pages/FeaturedProducts";

function Home(props) {
  return (
    <>
      <div className="hero">
        <ProductList />
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
      {props.userId && (
        <div className="feature">
          <FeaturedProducts />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.userData._id,
  };
};

export default connect(mapStateToProps)(Home);
