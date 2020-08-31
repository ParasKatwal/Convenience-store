import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <div className="sign-in">
                <Container>
                    <div className="sign-in__wrapper">
                        <div className="sign-in__card">
                            <h1>Create your Account!</h1>
                            <Form>
                                <Form.Group
                                    controlId="formBasicEmail"
                                    className="pb-3"
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group
                                    controlId="formBasicPassword"
                                    className="pb-3"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Form.Group
                                    controlId="formBasicPassword"
                                    className="pb-3"
                                >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="I agree to the term & privacy policy"
                                    />
                                </Form.Group>

                                <div className="text-center mt-4">
                                    <Button variant="primary" type="submit">
                                        Create Account
                                    </Button>
                                </div>

                                <div className="py-4 text-center">
                                    Already a member?{" "}
                                    <Link to="/signin">Log In</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Register;
