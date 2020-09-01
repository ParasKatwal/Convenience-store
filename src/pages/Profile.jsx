import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../img/profile.png";

function Profile() {
    return (
        <div className="profile">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="profile__img">
                            <img src={profileImg} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="profile__text">
                            <h3>Name: Sita Chetrri</h3>
                            <h4>Email: sita@gmail.com</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
