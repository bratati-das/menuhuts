import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";


// img
import logo1 from '../../assets/img/rest-logo1.png';
import logo2 from '../../assets/img/rest-logo2.png';
import logo3 from '../../assets/img/rest-logo3.png';


function FavouriteRestaurant() {
    return (
        <>
            <h1 className="container-heading"><span>Search</span> business</h1>
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
                            <ul>
                                <li className="phone">0393975451</li>
                                <li className="address">135 Nelson Place, Williamstown VIC 3016, Australia</li>
                            </ul>
                        </div>

                        <Link to={``} className="favorite-icon">
                            <i className="fas fa-heart"></i>
                        </Link>
                    </div>
                </div>

                <div className="business-item">
                    <img src={logo3} className="business-logo" alt="Menuhuts" />
                    <div className="business-description">
                        <div className="busn-details">
                            <h3>Jack in the Box (400 Geary St)</h3>
                            <ul>
                                <li className="phone">0393975451</li>
                                <li className="address">135 Nelson Place, Williamstown VIC 3016, Australia</li>
                            </ul>
                        </div>

                        <Link to={``} className="favorite-icon">
                            <i className="fas fa-heart"></i>
                        </Link>
                    </div>
                </div>

                <div className="business-item">
                    <img src={logo2} className="business-logo" alt="Menuhuts" />
                    <div className="business-description">
                        <div className="busn-details">
                            <h3>McDonald's® (Fillmore)</h3>
                            <ul>
                                <li className="phone">0393975451</li>
                                <li className="address">135 Nelson Place, Williamstown VIC 3016, Australia</li>
                            </ul>
                        </div>

                        <Link to={``} className="favorite-icon">
                            <i className="fas fa-heart"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavouriteRestaurant;