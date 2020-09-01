import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

import sl from "../components/selector";
import * as actions from "../redux/actions";

// IMAGES
import p1 from "../img/p1.png";

function Cart(props) {
  const { cartedProduct } = staticSelector.select(props);

  return (
    <>
      <div className="checkout">
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr>
                    <th>ITEMS Items</th>
                    <th>PRICE</th>
                    <th>QUANITY</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {cartedProduct.map((product, key) => (
                    <tr>
                      <td className="name">
                        <img src={p1} alt="" />
                        <p>{product.name}</p>
                      </td>
                      <td>${product.price}</td>
                      <td>1</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  //   onClick={handleAddToCart}
                >
                  Proceed to payment
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

const staticSelector = sl.object({
  cartedProduct: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      picture: sl.string(""),
      description: sl.string(""),
      category: sl.string(""),
      price: sl.number(),
    })
  ),
});

const mapStateToProps = (state) => {
  return {
    cartedProduct: state.cartedProduct,
  };
};

export default connect(mapStateToProps)(Cart);
