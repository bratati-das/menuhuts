import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// components
import Banner from './Banner';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Tax not Included with Price
    </Tooltip>
);

function ProductOrder() {
    return (
        <>
            <Banner />
            <section className="confirmation">
                <Container fluid>
                    <Col>
                        <Row>
                            <Col sm={12}>
                                <h1 className="container-heading">Thank you. Your order has submitted successfully.</h1>
                                <Col sm={12}>
                                    <div className="confirmation-details-cont">
                                        <div className="confirmation-details">
                                            <Button variant="outline-secondary">Order number #50</Button>

                                            <div className="details-board">
                                                <div className="details-item">
                                                    <Row>
                                                        <Col md={6} sm={12}>
                                                            <h5 className="title">Billing details</h5>
                                                            <ul className="order-details">
                                                                <li>John Adams</li>
                                                                <li>7255 Mission St.</li>
                                                                <li>9876543210</li>
                                                                <li>john@demo.com</li>
                                                            </ul>
                                                        </Col>

                                                        <Col md={6} sm={12}>
                                                            <h5 className="title">Business details</h5>
                                                            <ul className="order-details">
                                                                <li>Jack in the Box</li>
                                                                <li>6133 E Ben White Blvd, Austin</li>
                                                                <li>08974564596</li>
                                                                <li>jack@box.com</li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className="details-item ordered-items-cont">
                                                    <div className="ordered-item">
                                                        <span className="quantities">1</span>

                                                        <div className="ordered-description">
                                                            <div className="product-desc">
                                                                <h5 className="p-name">Chicken Pakora</h5>

                                                                <ul className="extra-items">
                                                                    <li className="title">Seasoned Fries</li>
                                                                    <li>Nacho Fries</li>
                                                                    <li>Seasoned Fries</li>
                                                                </ul>

                                                                <ul className="extra-items">
                                                                    <li className="title">Seasoned Fries</li>
                                                                    <li>Nacho Fries</li>
                                                                    <li>Seasoned Fries</li>
                                                                </ul>
                                                            </div>

                                                            <div className="product-right">
                                                                <h5 className="p-price">$9.99</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="ordered-item">
                                                        <span className="quantities">1</span>

                                                        <div className="ordered-description">
                                                            <div className="product-desc">
                                                                <h5 className="p-name">Paneer Pakora</h5>

                                                            </div>

                                                            <div className="product-right">
                                                                <h5 className="p-price">$9.99</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="details-item calculation-box">
                                                    <div className="calc-item">
                                                        <span className="left">Subtotal  •  2 items</span>
                                                        <span className="right">$19.98</span>
                                                    </div>

                                                    <div className="calc-item">
                                                        <span className="left">Delivery fee</span>
                                                        <span className="right">$3.00</span>
                                                    </div>

                                                    <div className="calc-item">
                                                        <span className="left">Tax (10%)
                                                <OverlayTrigger
                                                                placement="right"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={renderTooltip}
                                                            >
                                                                <Button><i className="fas fa-info-circle"></i></Button>
                                                            </OverlayTrigger>
                                                        </span>
                                                        <span className="right">$5.00</span>
                                                    </div>

                                                    <div className="calc-item">
                                                        <span className="left">Service fee (10%)</span>
                                                        <span className="right">$4.00</span>
                                                    </div>

                                                    <div className="calc-item">
                                                        <span className="left">Tips</span>
                                                        <span className="right">$0.00</span>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="ordered-total">
                                                <span className="left">Total</span>
                                                <span className="right">$31.98</span>
                                            </div>

                                            <div className="payment">
                                                Payment method: Cash
                                            </div>
                                        </div>

                                    </div>


                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </section>
        </>
    );
}

export default ProductOrder;