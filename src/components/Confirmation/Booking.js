import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

// components

function Booking() {
    return (
        <>
            <section className="no-banner confirmation">
                <Container fluid>
                    <Col>
                        <Row>
                            <Col sm={12}>
                                <h1 className="container-heading">Thank you. Your Booking has been received.</h1>
                                <Col sm={12}>
                                    <div className="confirmation-details-cont">
                                        <div className="confirmation-details">
                                            <Button variant="outline-secondary">Booking number #50</Button>

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
                                            </div>

                                            <div className="payment">
                                                Booking date & time: 31-01-2021 - 11:00
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

export default Booking;