import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";


function BusinessInfo() {
    return (
        <>
            <div className="other-container business-info">
                <Row>
                    <Col md={6} sm={12}>
                        <h5 className="sub-heading"><i class="fas fa-map-marker-alt"></i>6133 E Ben White Blvd, Austin, TX 78741</h5>
                        <hr />
                        <h5 className="sub-heading"><i class="fas fa-clock"></i>Opening hours</h5>
                        <ul className="hours">
                            <li>
                                <span>Sunday</span>
                                <ul>
                                    <li>11:00 - 21:00</li>
                                </ul>
                            </li>
                            <li>
                                <span>Monday</span>
                                <ul>
                                    <li>09:00 - 14:00</li>
                                    <li>15:00 - 21:00</li>
                                </ul>
                            </li>
                            <li>
                                <span>Tuesday</span>
                                <ul>
                                    <li>09:00 - 14:00</li>
                                    <li>15:00 - 21:00</li>
                                </ul>
                            </li>
                            <li>
                                <span>Wednesday</span>
                                <ul>
                                    <li>11:00 - 21:00</li>
                                </ul>
                            </li>
                            <li>
                                <span>Thursday</span>
                                <ul>
                                    <li>11:00 - 21:00</li>
                                </ul>
                            </li>
                            <li>
                                <span>Friday</span>
                                <ul>
                                    <li>10:00 - 15:00</li>
                                    <li>11:00 - 21:00</li>
                                </ul>
                            </li>
                            <li>
                                <span>Saturday</span>
                                <ul>
                                    <li>08:00 - 15:00</li>
                                    <li>11:00 - 21:00</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} sm={12}>
                        <h5 className="sub-heading">Contact with business</h5>
                        <Form>
                            <Form.Group>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i class="fas fa-user"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="Name" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i class="fas fa-envelope"></i></InputGroup.Text>
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
                                                <InputGroup.Text><i class="fas fa-comment"></i></InputGroup.Text>
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

export default BusinessInfo;