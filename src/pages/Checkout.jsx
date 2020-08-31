import React from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// IMAGES
import p1 from "../img/p1.png";

function Checkout() {
    return (
        <>
            <div className="checkout">
                <Container>
                    <Row>
                        <Col sm={12} md={7}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ITEMS Items</th>
                                        <th>PRICE</th>
                                        <th>QUANITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="name">
                                            <img src={p1} alt="" />
                                            <p>Vedaka Gold Tea</p>
                                        </td>
                                        <td>Rs 2000</td>
                                        <td>Qty. 1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col sm={12} md={5}>
                            <div className="checkout-form">
                                <Form>
                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridEmail"
                                        >
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Full name"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            controlId="formGridPassword"
                                        >
                                            <Form.Label>Number</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Phone number"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridCity"
                                        >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            controlId="formGridState"
                                        >
                                            <Form.Label>State</Form.Label>
                                            <Form.Control
                                                as="select"
                                                defaultValue="Choose..."
                                            >
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            controlId="formGridZip"
                                        >
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>

                                    <div className="text-center">
                                        <Button variant="primary" type="submit">
                                            Proceed To Payment
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Checkout;
