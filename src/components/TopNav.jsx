import React from "react";
import {
    Container,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Container className="d-flex justify-content-between align-items-center">
                    <div className="nav__logo">
                        <svg width="115" height="63" viewBox="0 0 115 63">
                            <text
                                id="CONVENIENCE_STORE"
                                data-name="CONVENIENCE STORE"
                                transform="translate(0 18)"
                                fill="#303030"
                                font-size="17"
                                font-family="Roboto-Black, Roboto"
                                font-weight="800"
                            >
                                <tspan x="0" y="0">
                                    CONVENIENCE
                                </tspan>
                                <tspan fill="#fd7d2d" font-size="36">
                                    <tspan x="0" y="35">
                                        STORE
                                    </tspan>
                                </tspan>
                            </text>
                        </svg>
                    </div>
                    <div className="search-bar">
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2 shadow-none"
                            />
                            <Button className="shadow-none">Search</Button>
                        </Form>
                    </div>
                    <div className="cart">
                        <svg width="30" height="30" viewBox="0 0 30 30">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect width="30" height="30" fill="none" />
                                </clipPath>
                            </defs>
                            <g id="shopping-cart" clip-path="url(#clip-path)">
                                <g id="Group_19" data-name="Group 19">
                                    <path
                                        id="Path_12"
                                        data-name="Path 12"
                                        d="M29.737,6.819a1.172,1.172,0,0,0-.909-.433H7.6l-.087-.8,0-.026A6.412,6.412,0,0,0,1.172,0a1.172,1.172,0,0,0,0,2.344A4.062,4.062,0,0,1,5.186,5.855l1.393,12.8a3.521,3.521,0,0,0-2.067,3.2c0,.01,0,.02,0,.029s0,.02,0,.029A3.52,3.52,0,0,0,8.027,25.43H8.5a3.457,3.457,0,1,0,6.546,0h5.055a3.457,3.457,0,1,0,3.273-2.344H8.027a1.173,1.173,0,0,1-1.172-1.172c0-.01,0-.02,0-.029s0-.02,0-.029a1.173,1.173,0,0,1,1.172-1.172H22.988A5.366,5.366,0,0,0,27.852,17.4a1.172,1.172,0,0,0-2.146-.942,3.064,3.064,0,0,1-2.718,1.877H8.9L7.857,8.73h19.53l-.573,2.749a1.172,1.172,0,1,0,2.294.479l.868-4.16A1.172,1.172,0,0,0,29.737,6.819ZM23.379,25.43a1.113,1.113,0,1,1-1.113,1.113A1.115,1.115,0,0,1,23.379,25.43Zm-11.6,0a1.113,1.113,0,1,1-1.113,1.113A1.115,1.115,0,0,1,11.777,25.43Z"
                                        fill="#474747"
                                    />
                                </g>
                            </g>
                        </svg>
                        <div className="cart__number">
                            <span></span>
                        </div>
                    </div>
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