import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";


// img
import logo1 from '../../assets/img/rest-logo1.png';
import logo2 from '../../assets/img/rest-logo2.png';
import logo3 from '../../assets/img/rest-logo3.png';


function BookingHistory() {
    return (
        <>
            <h1 className="container-heading"><span>Booking</span> history</h1>
            <Form>
                <Form.Group>
                    <Row>
                        <Col md={12} sm={12}>
                            <InputGroup className="grey">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-search"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control id="" placeholder="Search" />
                            </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>

            <div className="business-item-cont">
                <div className="business-item">
                    <img src={logo1} className="business-logo" alt="Menuhuts" />
                    <div className="business-description">
                        <div className="busn-details">
                            <h3>Jack in the Box (400 Geary St)</h3>
                            <ul className="other">
                                <li className="ordered">2 items for $31.98</li>
                                <li className="delivery-status">21-01-2020  11:00</li>
                                <li className="receipt"><Link to={``}>View receipt</Link></li>
                            </ul>
                        </div>

                        <div className="busn-right">
                            <span className="order-status">Pending</span>
                        </div>
                    </div>
                </div>

                <div className="business-item">
                    <img src={logo3} className="business-logo" alt="Menuhuts" />
                    <div className="business-description">
                        <div className="busn-details">
                            <h3>Jack in the Box (400 Geary St)</h3>
                            <ul className="other">
                                <li className="ordered">2 items for $31.98</li>
                                <li className="delivery-status">21-01-2020  11:00</li>
                                <li className="receipt"><Link to={``}>View receipt</Link></li>
                            </ul>
                        </div>

                        <div className="busn-right">
                            <span className="order-status">Pending</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default BookingHistory;