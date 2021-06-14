import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";

// img
import client1 from './../../../assets/img/client-1.jpg';
import client2 from './../../../assets/img/client-2.jpg';
import client3 from './../../../assets/img/client-3.jpg';


function Review() {
    return (
        <>
            <div className="other-container business-review">
                <Row>
                    <Col md={6} sm={12}>
                        <div className="reviewed-item">
                            <div className="user-container">
                                <img src={client1} alt="Menuhuts" />
                                <div className="information">
                                    <div className="left">
                                        <h5 className="sub-heading">Sanjha Chulha</h5>
                                        <span className="date">12-01-2020</span>
                                    </div>
                                    <span className="stars">
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <p className="reviewed-des">
                                This is at southern Avenue. The staffs r so quick ,well behaved and cooperative.And I love the ambiance. We have ordered tandoori chicken, chicken biriyani, and chicken bharta. This is at the magma house.The ambiance is quite good and the decoration is unique. Staffs are good.
                            </p>
                        </div>

                        <div className="reviewed-item">
                            <div className="user-container">
                                <img src={client2} alt="Menuhuts" />
                                <div className="information">
                                    <div className="left">
                                        <h5 className="sub-heading">Bhagyat Reddy</h5>
                                        <span className="date">21-01-2020</span>
                                    </div>
                                    <span className="stars">
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <p className="reviewed-des">
                                This is at southern Avenue. The staffs r so quick ,well behaved and cooperative.And I love the ambiance. We have ordered tandoori chicken, chicken biriyani, and chicken bharta. This is at the magma house.The ambiance is quite good and the decoration is unique. Staffs are good.
                            </p>
                        </div>

                        <div className="reviewed-item">
                            <div className="user-container">
                                <img src={client3} alt="Menuhuts" />
                                <div className="information">
                                    <div className="left">
                                        <h5 className="sub-heading">John Adams</h5>
                                        <span className="date">30-01-2020</span>
                                    </div>
                                    <span className="stars">
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                        <i className="fas fa-star active"></i>
                                    </span>
                                </div>
                            </div>
                            <p className="reviewed-des">
                                This is at southern Avenue. The staffs r so quick ,well behaved and cooperative.And I love the ambiance. We have ordered tandoori chicken, chicken biriyani, and chicken bharta. This is at the magma house.The ambiance is quite good and the decoration is unique. Staffs are good.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <h5 className="sub-heading">Add your review</h5>
                        <Form>
                            <Form.Group className="feature-container">
                                <Row>
                                    <Col>
                                        <div className="feature-points">
                                            <span>Product quality</span>
                                            <span className="stars">
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>

                                        <div className="feature-points">
                                            <span>Punctuality</span>
                                            <span className="stars">
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>

                                        <div className="feature-points">
                                            <span>Service</span>
                                            <span className="stars">
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>

                                        <div className="feature-points">
                                            <span>Food packing</span>
                                            <span className="stars">
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="Name" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="Email" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <InputGroup className="grey textarea">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-comment"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control as="textarea" id="" placeholder="Message" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Review;