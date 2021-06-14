import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';




function UserDetails() {
    return (
        <>
            <div className="details-section">
                <div className="details-item">
                    <h1 className="container-heading"><span>Delivery</span> details</h1>

                    <div className="details-body">
                        <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="First name" />
                                    </InputGroup>
                                </Col>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Last name" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={12} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Taco Bell (7255 Mission St.)" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={12} sm={12}>
                                    <InputGroup className="grey textarea">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="textarea" id="" placeholder="Delivery address" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Email" />
                                    </InputGroup>
                                </Col>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-mobile"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Mobile" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={12} sm={12}>
                                    <InputGroup className="grey discount">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-tag"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Discount coupon" />
                                        <Button variant="secondary">Apply</Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Email" />
                                    </InputGroup>
                                </Col>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-mobile"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Mobile" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <div className="driver-tips">
                                        <Form.Label>Driver tips <br /> <span className="small">$0.00</span></Form.Label>
                                        <Form.Control type="range" custom />
                                    </div>
                                </Col>

                                <Col md={6} sm={12}>
                                    <Form.Check type="checkbox" label="Custom tips" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={12} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i className="fas fa-money-bill-wave-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Tips" />
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
                                        <Form.Control as="textarea" id="" placeholder="Additional information" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                </div>

                <div className="details-item">
                    <h1 className="container-heading"><span>Delivery</span> time</h1>

                    <div className="details-body">
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Button variant="outline-primary">Right now</Button>
                                </Col>
                                <Col sm={6}>
                                    <Button variant="outline-secondary">Schedule</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                </div>

                <div className="details-item">
                    <h1 className="container-heading"><span>Payment</span> method</h1>

                    <div className="details-body">
                        <Form.Group>
                            <Row>
                                <Col sm={12}>
                                    <div className="payments">
                                        <Form.Check type="radio" label="Cash" />
                                        <Form.Check type="radio" label="Card" />
                                        <Form.Check type="radio" label="Paypal" />
                                        <Form.Check type="radio" label="Stripe" />
                                        <Form.Check type="radio" label="ePay" />
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                </div>
            </div>

        </>
    );
}

export default UserDetails;