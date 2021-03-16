import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";


function Booking() {
    return (
        <>
            <div className="other-container business-booking">
                <Row>
                    <Col>
                        <Form>
                            <h5 className="sub-heading">Booking details</h5>
                            <Form.Group>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i class="fas fa-calendar-day"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="Date" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i class="fas fa-clock"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="Time" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <h5 className="sub-heading differ-part">User details</h5>
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
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i class="fas fa-mobile"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="Mobile" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <InputGroup className="grey">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i class="fas fa-users"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id="" placeholder="People" />
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
                                <Button variant="primary" type="submit">Book a table</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Booking;