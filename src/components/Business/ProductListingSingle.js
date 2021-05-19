import React, { useState } from 'react';

// img
import prodImg1 from './../../assets/img/prod-1.jpg';




function ProductListingSingle() {

    return (
        <>
            <div className="items">
                <div className="product-description">
                    <div className="top">
                        <h5>Vegetable Pakora</h5>
                        <p>Vegetables mixed in herbs and spices, dipped in batter and fried, dipped in batter and fried.</p>
                    </div>
                    <div className="btm">
                        <h5 className="price">$9.99</h5>
                        <span className="veg"></span>
                    </div>
                </div>
                <img src={prodImg1} className="product-img" alt="Menuhuts" />
            </div>
        </>
    );
}

export default ProductListingSingle;