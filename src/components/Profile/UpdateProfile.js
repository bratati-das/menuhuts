import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";


function UpdateProfile() {
    return (
        <>
            <h1 className="container-heading"><span>My</span> profile</h1>
            <Form>
            <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="First name" />
                                    </InputGroup>
                                </Col>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Last name" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-envelope"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Email" />
                                    </InputGroup>
                                </Col>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-mobile"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Mobile" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={12} sm={12}>
                                    <InputGroup className="grey textarea">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-map-marker-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="textarea" id="" placeholder="Address" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button variant="secondary">Save</Button>
            </Form>
        </>
    );
}

export default UpdateProfile;