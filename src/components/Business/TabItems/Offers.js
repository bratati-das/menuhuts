import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, } from "react-bootstrap";

// image
import offer1 from './../../../assets/img/offer-1.jpg';
import offer2 from './../../../assets/img/offer-2.jpg';
import offer3 from './../../../assets/img/offer-3.jpg';
import offer4 from './../../../assets/img/offer-4.jpg';


function Offers() {
    return (
        <>
            <div className="other-container business-offers">
                <Row>
                    <Col lg={4} md={4} sm={6} xs={6}>
                        <div className="offer-card" style={{ backgroundImage: `url(${offer3})`, color: '#fff', }}>
                            <span class="offer-type">Exclusive</span>
                            <div className="offer-description">
                                <h2>Epic Deals</h2>
                                <h4>40% Off</h4>
                                <span className="footnote">On legendary restaurants</span>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={6} xs={6}>
                        <div className="offer-card" style={{ backgroundImage: `url(${offer2})`, color: '#000', }}>
                            <span class="offer-type">Offer</span>
                            <div className="offer-description">
                                <h2>Get 50% off</h2>
                                <h4 className="offer-code">Code: MENU587</h4>
                                <span className="footnote">Free Delivery</span>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={6} xs={6}>
                        <div className="offer-card" style={{ backgroundImage: `url(${offer4})`, color: '#fff', }}>
                            <span class="offer-type">Offer</span>
                            <div className="offer-description">
                                <h2>Upto $100 Cashback</h2>
                                <h4 className="offer-code">Use: Holi</h4>
                                <span className="footnote">From McDonald's only</span>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={6} xs={6}>
                        <div className="offer-card" style={{ backgroundImage: `url(${offer1})`, color: '#fff', }}>
                            <span class="offer-type">Exclusive</span>
                            <div className="offer-description">
                                <h2>Special offer</h2>
                                <h4>50% Off</h4>
                                <span className="footnote">From prakrukhi naati style</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Offers;