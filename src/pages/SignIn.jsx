import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <>
            <div className="sign-in">
                <Container>
                    <div className="sign-in__wrapper">
                        <div className="sign-in__card">
                            <h1>Log in to your Account !</h1>
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

                                <div className="text-center">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                                <div className="py-4 text-center">
                                    Don't have account?{" "}
                                    <Link to="/register">Create Account</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SignIn;
