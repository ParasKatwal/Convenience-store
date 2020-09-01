import React from "react";
import { Link } from "react-router-dom";

// IMAGES
import p1 from "../img/p1.png";

function SingleProduct() {
    return (
        <>
            <Link to="/productlist/one">
                <div className="singleProduct">
                    <div className="singleProduct__img">
                        <img src={p1} alt="" />
                    </div>
                    <p>Lenovo P8 Tab3 8 plus</p>
                    <h3>$329.99</h3>
                    <div className="text-center">
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SingleProduct;
