import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, } from "react-bootstrap";


function ChangePassword() {
    return (
        <>
            <h1 className="container-heading"><span>Change</span> password</h1>
            <Form>
            <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-key"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Current password" />
                                    </InputGroup>
                                </Col>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-key"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="New password" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col md={6} sm={12}>
                                    <InputGroup className="grey">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-key"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="" placeholder="Confirm password" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button variant="secondary">Submit</Button>
            </Form>
        </>
    );
}

export default ChangePassword;