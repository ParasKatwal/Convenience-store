import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
// IMAGES
import productImg from "../img/p1.png";

function ProductDetails() {
    return (
        <>
            <div className="product-details">
                <Container>
                    <div className="product-details__top">
                        <div className="product-details__img">
                            <img src={productImg} alt="" />
                        </div>
                        <div className="product-details__pricing">
                            <p>Vedaka Gold Tea</p>
                            <div className="price">
                                <h4>Rs. 329.99</h4>
                                <button>Add to cart</button>
                            </div>
                            <span>
                                Anywhere Inside Ring-road: Rs. 100 Outside
                                Rind-road: Rs. 200
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ProductDetails;
