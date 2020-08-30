import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function TopNav() {
    return (
        <>
            <div className="top-header">
                <Container className="d-flex justify-content-between">
                    <div className="phone">
                        <span>(+977) 123 456 7890</span>
                    </div>
                    <div className="log">
                        <Link to={"/"}>Register</Link>
                        <Link className="ml-4" to={"/"}>
                            Sign In
                        </Link>
                    </div>
                </Container>
            </div>
            <div className="logo__wrapper">
                <Container className="d-flex justify-content-between">
                    <div className="nav__logo">store</div>
                    <div className="cart">cart</div>
                </Container>
            </div>
            <div className="nav-wrapper">
                <Container>
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#features">Food</Nav.Link>
                                <Nav.Link href="#pricing">vegetable</Nav.Link>
                                <Nav.Link href="#pricing">Soda</Nav.Link>
                                <Nav.Link href="#pricing">Drink</Nav.Link>
                                <Nav.Link href="#pricing">Chocolate</Nav.Link>
                                <Nav.Link href="#pricing">Grocries</Nav.Link>
                                <Nav.Link href="#pricing">
                                    Beauty Products
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

export default TopNav;
