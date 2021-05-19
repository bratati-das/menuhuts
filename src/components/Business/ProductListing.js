import React, { } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Row, Col, } from "react-bootstrap";

// components
import ProductDetails from './../Modal/ProductDetails/ProductDetails';

// img
import prodImg1 from './../../assets/img/prod-1.jpg';
import prodImg2 from './../../assets/img/prod-2.jpg';
import prodImg3 from './../../assets/img/prod-3.png';
import prodImg4 from './../../assets/img/prod-4.jpg';
import prodImg5 from './../../assets/img/prod-5.png';
import prodImg6 from './../../assets/img/prod-6.jpg';




function ProductListing() {

    return (
        <Router>

            <div className="items-sec" id="">
                <h4 className="category">Entree</h4>
                <p className="cate-des">
                    Of all the American delivery places in San Francisco, Eleven is one of the most popular among Uber Eats users. Wish you could ask Eleven customers what's the best thing on the menu? If you could, you might expect the answer to be the Quarter Pound Big Bite, since it's one of the most-ordered items on the entire menu at this late night go-to.
                        </p>
                <ul className="sub-category">
                    <li>Entree</li>
                    <li>Haryali Banno</li>
                </ul>
                <Row className="list-container">


                    <Col lg={4} md={6} sm={12}>
                        <ProductDetails />
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className="items added-items">
                            <span className="added-quantity">2</span>
                            <div className="product-description">
                                <div className="top">
                                    <h5>Vegetable Pakora</h5>
                                    <p>Vegetables mixed in herbs and spices, dipped in batter and fried, dipped in batter and fried.</p>
                                </div>
                                <div className="btm">
                                    <h5 className="price">$9.99</h5>
                                    <span className="non-veg"></span>
                                </div>
                            </div>
                            <img src={prodImg2} className="product-img" alt="Menuhuts" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="items">
                            <div className="product-description">
                                <div className="top">
                                    <h5>Vegetable Pakora</h5>
                                    {/* <p>Vegetables mixed in herbs and spices, dipped in batter and fried, dipped in batter and fried.</p> */}
                                </div>
                                <div className="btm">
                                    <h5 className="price">$9.99</h5>
                                    <span className="veg"></span>
                                </div>
                            </div>
                            <img src={prodImg3} className="product-img" alt="Menuhuts" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
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
                            {/* <img src={prodImg4} className="product-img" alt="Menuhuts" /> */}
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="items">
                            <div className="product-description">
                                <div className="top">
                                    <h5>Vegetable Pakora</h5>
                                    <p>Vegetables mixed in herbs and spices, dipped in batter and fried, dipped in batter and fried.</p>
                                </div>
                                <div className="btm">
                                    <h5 className="price">$9.99</h5>
                                    {/* <span className="veg"></span> */}
                                </div>
                            </div>
                            <img src={prodImg5} className="product-img" alt="Menuhuts" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
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
                            <img src={prodImg6} className="product-img" alt="Menuhuts" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="items-sec" id="">
                <h4 className="category">Snacks</h4>
                {/* <p className="cate-des">
                            Of all the American delivery places in San Francisco, Eleven is one of the most popular among Uber Eats users. Wish you could ask Eleven customers what's the best thing on the menu? If you could, you might expect the answer to be the Quarter Pound Big Bite, since it's one of the most-ordered items on the entire menu at this late night go-to.
                        </p>
                        <ul className="sub-category">
                            <li>Entree</li>
                            <li>Haryali Banno</li>
                        </ul> */}
                <Row className="list-container">
                    <Col lg={4} md={6} sm={12}>
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
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="items">
                            <div className="product-description">
                                <div className="top">
                                    <h5>Vegetable Pakora</h5>
                                    <p>Vegetables mixed in herbs and spices, dipped in batter and fried, dipped in batter and fried.</p>
                                </div>
                                <div className="btm">
                                    <h5 className="price">$9.99</h5>
                                    {/* <span className="non-veg"></span> */}
                                </div>
                            </div>
                            {/* <img src={prodImg2} className="product-img" alt="Menuhuts" /> */}
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="items">
                            <div className="product-description">
                                <div className="top">
                                    <h5>Vegetable Pakora</h5>
                                    {/* <p>Vegetables mixed in herbs and spices, dipped in batter and fried, dipped in batter and fried.</p> */}
                                </div>
                                <div className="btm">
                                    <h5 className="price">$9.99</h5>
                                    <span className="veg"></span>
                                </div>
                            </div>
                            {/* <img src={prodImg3} className="product-img" alt="Menuhuts" /> */}
                        </div>
                    </Col>
                </Row>
            </div>


        </Router>
    );
}

export default ProductListing;